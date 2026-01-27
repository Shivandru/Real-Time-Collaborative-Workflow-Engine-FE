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
  