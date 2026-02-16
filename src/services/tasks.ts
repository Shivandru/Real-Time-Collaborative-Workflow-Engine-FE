import { generalFunction } from "../lib/generalFuntion";
import { SessionType } from "../types/session";
import { CreateTask, Task } from "../types/tasks";

class TaskServices{
    async createTask(session: SessionType, task: CreateTask): Promise<void>{
        try {
            const url = generalFunction.createUrl("/tasks/create");
            const headers = generalFunction.createHeaders(session);
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    ...headers
                },
                body: JSON.stringify(task),
            })
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getAllTasks(session: SessionType, workspaceId: string, boardId: string): Promise<Task[]>{
        try {
            const url = generalFunction.createUrl(`/tasks/getAll?workspaceId=${workspaceId}&boardId=${boardId}`);
            const headers = generalFunction.createHeaders(session);
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                }
            });
            const data = await res.json();
            return data.data;
        } catch (error) {
            
        }
    }
};

export const taskServices = new TaskServices();