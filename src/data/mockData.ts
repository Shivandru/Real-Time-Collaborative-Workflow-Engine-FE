import { Workspace } from "@/types/board";

export const mockWorkspaces: Workspace[] = [
  {
    id: "ws-1",
    name: "Personal",
    boards: [
      {
        id: "board-1",
        name: "Project Alpha",
        color: "bg-blue-500",
        columns: [
          {
            id: "col-1",
            title: "To Do",
            tasks: [
              { id: "task-1", title: "Research competitors", labels: ["research"] },
              { id: "task-2", title: "Create wireframes", labels: ["design"] },
              { id: "task-3", title: "Setup project repository" },
            ],
          },
          {
            id: "col-2",
            title: "In Progress",
            tasks: [
              { id: "task-4", title: "Design landing page", labels: ["design", "priority"] },
              { id: "task-5", title: "Implement authentication" },
            ],
          },
          {
            id: "col-3",
            title: "Review",
            tasks: [
              { id: "task-6", title: "Code review for API", labels: ["dev"] },
            ],
          },
          {
            id: "col-4",
            title: "Done",
            tasks: [
              { id: "task-7", title: "Project kickoff meeting" },
              { id: "task-8", title: "Define requirements" },
            ],
          },
        ],
      },
      {
        id: "board-2",
        name: "Marketing",
        color: "bg-green-500",
        columns: [
          { id: "col-5", title: "Ideas", tasks: [] },
          { id: "col-6", title: "In Progress", tasks: [] },
          { id: "col-7", title: "Completed", tasks: [] },
        ],
      },
    ],
  },
  {
    id: "ws-2",
    name: "Work Team",
    boards: [
      {
        id: "board-3",
        name: "Sprint Board",
        color: "bg-purple-500",
        columns: [
          { id: "col-8", title: "Backlog", tasks: [] },
          { id: "col-9", title: "Sprint", tasks: [] },
          { id: "col-10", title: "Done", tasks: [] },
        ],
      },
    ],
  },
];

