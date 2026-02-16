import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BoardList } from "@/src/types/boardList";
import { MoreHorizontal, Plus } from "lucide-react";

interface BoardColumnProps {
  column: BoardList;
}

export function BoardColumn({ column }: BoardColumnProps) {
  return (
    <div className="flex flex-col w-72 shrink-0 bg-muted/50 rounded-xl" key={column.boardListId}>
      <div className="flex items-center justify-between p-3 pb-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm text-foreground">{column.title}</h3>
          <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
            0
          </span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="flex flex-col gap-2 pb-3">
          {/* {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))} */}
        </div>
      </ScrollArea>

      <div className="p-3 pt-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add a card
        </Button>
      </div>
    </div>
  );
}
