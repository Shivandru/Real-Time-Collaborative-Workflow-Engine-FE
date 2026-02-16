import { generalFunction } from "../lib/generalFuntion";
import { SessionType } from "../types/session";
import { CreateWorkspace, WorkSpace } from "../types/workspace";

class WorkSpaceServices {

    async createWorkspace(session: SessionType, formData: CreateWorkspace){
        try {
            const url = generalFunction.createUrl("/workspace/create");
            const headers = generalFunction.createHeaders(session);
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    ...headers
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async getAllWorkspaces(session: SessionType): Promise<WorkSpace[]>{
        try {
            const url = generalFunction.createUrl("/workspace/getAll");
            const headers = generalFunction.createHeaders(session);
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                }
            })
            const data = await res.json();
            return data.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const workSpaceServices = new WorkSpaceServices();