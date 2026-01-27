import { Board } from "@/src/types/board";
import { BoardColumn } from "./BoardColumn";
import { Button } from "@/components/ui/button";
import { Plus, Star, Users, MoreHorizontal } from "lucide-react";

interface BoardViewProps {
  board: Board;
}

export function BoardView({ board }: BoardViewProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Board Header */}
      <div className="flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-foreground">{board.name}</h1>
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
          {board.columns.map((column) => (
            <BoardColumn key={column.id} column={column} />
          ))}
          
          {/* Add Column Button */}
          <div className="w-72 shrink-0">
            <Button
              variant="outline"
              className="w-full justify-start bg-muted/30 border-dashed hover:bg-muted/50"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add another list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
