import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { boardServices } from "../services/board";
import { useSession } from "next-auth/react";
import { SessionType } from "../types/session";
import { CreateBoard } from "../types/boardType";

export const useGetAllBoards = (workspaceId: string) => {
    const { data } = useSession();
    return useQuery({
        queryKey: ["boards", workspaceId],
        queryFn: () => boardServices.getAllBoards(data as SessionType, workspaceId),
    });
}

export const useGetBoard = (workspaceId: string, boardId: string) => {
    const { data } = useSession();
    return useQuery({
        queryKey: ["board", workspaceId, boardId],
        queryFn: () => boardServices.getBoard(data as SessionType, workspaceId, boardId),
    });
}

export const useCreateBoard = (workspaceId: string) => {
    const queryClient = useQueryClient();
    const { data } = useSession();
    return useMutation({
        mutationKey: ["create-board"],
        mutationFn: (formData: CreateBoard) => boardServices.createBoard(data as SessionType, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["boards", workspaceId] })
        }
    })
}