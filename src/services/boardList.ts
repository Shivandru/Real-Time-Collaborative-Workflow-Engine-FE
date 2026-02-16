import { generalFunction } from "../lib/generalFuntion";
import { BoardList, CreateBoardList } from "../types/boardList";
import { SessionType } from "../types/session";

class BoardListServices {
    async createBoardList(session: SessionType, boardList: CreateBoardList):Promise<BoardList> {
        try {
            const url = generalFunction.createUrl("/boardList/create");
            const headers = generalFunction.createHeaders(session);
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    ...headers
                },
                body: JSON.stringify(boardList),
            })
            const data = await res.json();
            return data.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getAllBoardLists(session: SessionType, workspaceId: string, boardId: string):Promise<BoardList[]> {
        try {
            const url = generalFunction.createUrl(`/boardList/getAll?workspaceId=${workspaceId}&boardId=${boardId}`);
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
            throw new Error(String(error));
        }
    }
}

export const boardListServices = new BoardListServices();