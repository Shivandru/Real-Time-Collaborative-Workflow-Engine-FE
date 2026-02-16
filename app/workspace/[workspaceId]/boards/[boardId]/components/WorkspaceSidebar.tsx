import BoardCreationForm from "@/app/home/components/BoardCreationForm";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useGetAllBoards } from "@/src/hooks/use-board";
import { useGetAllWorkspaces } from "@/src/hooks/use-workspace";
import { Board } from "@/src/types/boardType";
import {
  LayoutDashboard,
  Settings,
  Users
} from "lucide-react";
import { useMemo, useState } from "react";

interface WorkspaceSidebarProps {
  onSelectBoard: (board: Board) => void;
  workspaceId: string;
  boardId: string;
}

export function WorkspaceSidebar({
  onSelectBoard,
  workspaceId,
  boardId
}: WorkspaceSidebarProps) {
  const { data: workspaces } = useGetAllWorkspaces();
  const { data: boardData } = useGetAllBoards(workspaceId);
  const [openBoardForm, setOpenBoardForm] = useState(false);
  function handleBoardForm(){
    setOpenBoardForm(false);
  }

  const currWorkSpace = useMemo(()=>{
    return workspaces?.find((workspace) => workspace.workspaceId === workspaceId)
  },[workspaceId, workspaces])

  return (
    <div className="w-64 border-r bg-muted/30 flex flex-col h-full">
      <ScrollArea className="flex-1">
        <div className="p-3">
          <Button variant="ghost" className="w-full justify-start mb-1">
            <LayoutDashboard className="h-4 w-4 mr-3" />
            Boards
          </Button>

          <div className="mt-4">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
              {currWorkSpace?.title}
            </div>
              {boardData?.map((board: Board) => (
                <Button
                  key={board.boardId}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start text-sm",
                    boardId === board.boardId &&
                      "bg-accent text-accent-foreground"
                  )}
                  onClick={() => onSelectBoard(board)}
                >
                  <div
                    className={cn("h-2 w-2 rounded-sm mr-2")}
                  />
                  {board.title}
                </Button>
              ))}
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-3 border-t">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Settings className="h-4 w-4 mr-3" />
          Settings
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Users className="h-4 w-4 mr-3" />
          Members
        </Button>
      </div>
      <BoardCreationForm isOpen={openBoardForm} onClose={handleBoardForm} workspaceId={workspaceId} />
    </div>
  );
}
