import { Workspace, Board } from "@/src/types/board";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  LayoutDashboard,
  ChevronDown,
  Plus,
  Settings,
  Users,
  Trello,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkspaceSidebarProps {
  workspaces: Workspace[];
  selectedBoard: Board | null;
  onSelectBoard: (board: Board) => void;
}

export function WorkspaceSidebar({
  workspaces,
  selectedBoard,
  onSelectBoard,
}: WorkspaceSidebarProps) {
  return (
    <div className="w-64 border-r bg-muted/30 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Trello className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">TaskFlow</span>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <div className="p-3">
          <Button variant="ghost" className="w-full justify-start mb-1">
            <LayoutDashboard className="h-4 w-4 mr-3" />
            Boards
          </Button>

          <div className="mt-4">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
              Workspaces
            </div>

            {workspaces.map((workspace) => (
              <Collapsible key={workspace.id} defaultOpen>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between mb-1"
                  >
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-xs font-bold text-primary-foreground mr-3">
                        {workspace.name[0]}
                      </div>
                      <span className="text-sm">{workspace.name}</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-9 space-y-1">
                    {workspace.boards.map((board) => (
                      <Button
                        key={board.id}
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "w-full justify-start text-sm",
                          selectedBoard?.id === board.id &&
                            "bg-accent text-accent-foreground"
                        )}
                        onClick={() => onSelectBoard(board)}
                      >
                        <div
                          className={cn(
                            "h-2 w-2 rounded-sm mr-2",
                            board.color
                          )}
                        />
                        {board.name}
                      </Button>
                    ))}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-muted-foreground"
                    >
                      <Plus className="h-3 w-3 mr-2" />
                      Create board
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
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
    </div>
  );
}
