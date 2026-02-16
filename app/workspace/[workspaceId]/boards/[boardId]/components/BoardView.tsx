"use client";

import { useSession } from "next-auth/react";
import { BoardColumn } from "./BoardColumn";
import { Button } from "@/components/ui/button";
import { Plus, Star, Users, MoreHorizontal } from "lucide-react";
import { useGetAllBoardLists } from "@/src/hooks/use-boardList";
import { Board } from "@/src/types/boardType";
import { useParams } from "next/navigation";
import BoardListForm from "./BoardListForm";
import { useState } from "react";
import { BoardList } from "@/src/types/boardList";

interface BoardViewProps {
  board: Board;
  boardListData: BoardList[];
  workspaceId: string;
  boardId: string;
}

export function BoardView({ board, boardListData, workspaceId, boardId }: BoardViewProps) {
  
  const [openFormModal, setOpenFormModal] = useState(false);
  function handleFormModal() {
    setOpenFormModal(false);
  }

  return (
    <div className="flex flex-col h-full">
      {/* Board Header */}
      <div className="flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-foreground">{board?.title}</h1>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Star className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Columns */}
      <div className="flex-1 overflow-x-auto p-4">
        <div className="flex gap-4 h-full">
          {boardListData?.map((column) => (
            <BoardColumn key={column.boardListId} column={column} />
          ))}

          {/* Add Column Button */}
          <div className="w-72 shrink-0">
            <Button
              variant="outline"
              className="w-full justify-start bg-muted/30 border-dashed hover:bg-muted/50"
              onClick={() => setOpenFormModal(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add another list
            </Button>
          </div>
        </div>
      </div>
      <BoardListForm
        isOpen={openFormModal}
        onClose={handleFormModal}
        workspaceId={workspaceId}
        boardId={boardId}
      />
    </div>
  );
}
