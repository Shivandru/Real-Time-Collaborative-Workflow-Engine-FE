import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Column } from "@/src/types/board";
import { TaskCard } from "./TaskCard";

interface BoardColumnProps {
  column: Column;
}

export function BoardColumn({ column }: BoardColumnProps) {
  return (
    <div className="flex flex-col w-72 shrink-0 bg-muted/50 rounded-xl">
      <div className="flex items-center justify-between p-3 pb-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm text-foreground">{column.title}</h3>
          <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
            {column.tasks.length}
          </span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="flex flex-col gap-2 pb-3">
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
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
