import * as z from "zod";
export interface Task {
    id: string;
    title: string;
    description?: string;
    labels?: string[];
    dueDate?: string;
  }
  
  export interface Column {
    id: string;
    title: string;
    tasks: Task[];
  }
  
  export interface Board {
    id: string;
    name: string;
    columns: Column[];
    color: string;
  }
  
  export interface Workspace {
    id: string;
    name: string;
    boards: Board[];
  }

  export const createBoardSchema = z.object({
    title: z.string(),
    workspaceId: z.string(),
    visibility: z.enum(["PRIVATE", "WORKSPACE"]).default("WORKSPACE"),
    createdBy: z.string(),
});

export const boardSchema = createBoardSchema.extend({
  boardId: z.string(),
  createdAt: z.string(),
})

export type CreateBoard = z.infer<typeof createBoardSchema>;
// export type Board = z.infer<typeof boardSchema>;


  