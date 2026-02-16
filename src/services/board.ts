import { generalFunction } from "../lib/generalFuntion";
import { Board, CreateBoard } from "../types/boardType";
import { SessionType } from "../types/session";

class BoardServices {
    async createBoard(session: SessionType, board: CreateBoard): Promise<void>{
        try {
            const url = generalFunction.createUrl("/boards/create");
            const headers = generalFunction.createHeaders(session);
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    ...headers
                },
                body: JSON.stringify(board),
            })
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllBoards(session: SessionType, workspaceId: string): Promise<Board[]>{
        try {
            const url = generalFunction.createUrl(`/boards/${workspaceId}/getAll`);
            const headers = generalFunction.createHeaders(session);
            const res = await fetch(url, { headers });
            const data = await res.json();
            return data.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getBoard(session: SessionType, workspaceId: string, boardId: string): Promise<Board>{
        try {
            const url = generalFunction.createUrl(`/boards/${workspaceId}/get?boardId=${boardId}`);
            const headers = generalFunction.createHeaders(session);
            const res = await fetch(url, { headers });
            const data = await res.json();
            return data.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const boardServices = new BoardServices();