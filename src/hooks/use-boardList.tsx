import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { boardListServices } from "../services/boardList";
import { useSession } from "next-auth/react";
import { SessionType } from "../types/session";
import { CreateBoardList } from "../types/boardList";

export const useGetAllBoardLists = (workspaceId: string, boardId: string) => {
    const { data } = useSession();
    return useQuery({
        queryKey: ['boardLists', workspaceId, boardId],
        queryFn: () => boardListServices.getAllBoardLists(data as SessionType, workspaceId, boardId)
    })
}

export const useCreateBoardList = (workspaceId: string, boardId: string) => {
    const queryClient = useQueryClient();
    const { data } = useSession();
    return useMutation({
        mutationKey: ["create-boardList"],
        mutationFn: (formData: CreateBoardList) => boardListServices.createBoardList(data as SessionType, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['boardLists', workspaceId, boardId] })
        }
    })
}