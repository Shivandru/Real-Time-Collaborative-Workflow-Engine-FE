"use client";
import BoardCreationForm from "@/app/home/components/BoardCreationForm";
import { Card } from "@/src/components/ui/card";
import { useGetAllBoards } from "@/src/hooks/use-board";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const WorkspacePage = () => {
  const params = useParams();
  const router = useRouter();
  const workspaceId = params.workspaceId as string;
  const [openBoardForm, setOpenBoardForm] = useState(false);
  const { data: boardData } = useGetAllBoards(workspaceId);

  function handleCloseBoardForm() {
    setOpenBoardForm(false);
  }

  return (
    <main className="container mx-auto flex flex-col gap-4 p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-lg font-bold text-primary-foreground">
          P
        </div>
        <h2 className="text-xl font-semibold text-foreground">Personal</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {boardData?.filter((board) => board.visibility === "PRIVATE")?.map((board) => (
          <Card key={board.boardId} className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={()=> router.push(`/workspace/${workspaceId}/boards/${board.boardId}`)}>
            <div className="h-full min-h-[156px] flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm font-medium">{board.title}</span>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-lg font-bold text-primary-foreground">
          W
        </div>
        <h2 className="text-xl font-semibold text-foreground">WORKSPACE</h2>
      </div>
        <div className="grid grid-cols-4 gap-4">
        {boardData?.filter((board) => board.visibility === "WORKSPACE")?.map((board) => (
          <Card key={board.boardId} className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={()=> router.push(`/workspace/${workspaceId}/boards/${board.boardId}`)}>
            <div className="h-full min-h-[156px] flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm font-medium">{board.title}</span>
            </div>
          </Card>
        ))}
      </div>
      <Card
        className="cursor-pointer hover:bg-muted/50 transition-colors border-dashed max-w-[20rem]"
        onClick={() => setOpenBoardForm(true)}
      >
        <div className="h-full min-h-[156px] flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Plus className="h-8 w-8 mb-2" />
          <span className="text-sm font-medium">Create new board</span>
        </div>
      </Card>
      <BoardCreationForm
        isOpen={openBoardForm}
        onClose={handleCloseBoardForm}
        workspaceId={workspaceId}
      />
    </main>
  );
};
export default WorkspacePage;
