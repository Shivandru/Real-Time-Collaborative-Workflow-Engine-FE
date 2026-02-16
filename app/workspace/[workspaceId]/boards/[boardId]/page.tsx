"use client";
import { useState } from "react";
import { Board } from "@/types/boardType";
import { WorkspaceSidebar } from "./components/WorkspaceSidebar";
import { BoardView } from "./components/BoardView";
import { useParams } from "next/navigation";
import { useGetAllBoardLists } from "@/src/hooks/use-boardList";
import { useGetBoard } from "@/src/hooks/use-board";

const BoardPage = () => {
  const params = useParams();
  const workspaceId = params.workspaceId as string;
  const boardId = params.boardId as string;
  const { data: boardListData } = useGetAllBoardLists(workspaceId, boardId);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  const { data: boardData } = useGetBoard(workspaceId, boardId);

  function onSelectBoard(){}

  return (
    <div className="flex h-screen bg-background">
      <WorkspaceSidebar
        onSelectBoard={setSelectedBoard}
        workspaceId={workspaceId}
        boardId={boardId}
      />

      <main className="flex-1 overflow-hidden">
        <BoardView
          board={boardData}
          boardListData={boardListData}
          workspaceId={workspaceId}
          boardId={boardId}
        />
      </main>
    </div>
  );
};

export default BoardPage;
