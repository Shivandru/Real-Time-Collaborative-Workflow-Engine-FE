import { Task } from "@/src/types/board";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TaskCardProps {
  task: Task;
}

const labelColors: Record<string, string> = {
  research: "bg-yellow-500 hover:bg-yellow-600",
  design: "bg-pink-500 hover:bg-pink-600",
  dev: "bg-blue-500 hover:bg-blue-600",
  priority: "bg-red-500 hover:bg-red-600",
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="group cursor-pointer bg-card hover:ring-2 hover:ring-primary/20 transition-all shadow-sm">
      <CardContent className="p-3">
        {task.labels && task.labels.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {task.labels.map((label) => (
              <Badge
                key={label}
                className={`${labelColors[label] || "bg-muted"} text-white text-[10px] px-2 py-0`}
              >
                {label}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium text-foreground leading-tight">
            {task.title}
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {task.dueDate && (
          <div className="flex items-center gap-1 mt-2 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span className="text-xs">{task.dueDate}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
