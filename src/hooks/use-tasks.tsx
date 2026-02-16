import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { CreateTask } from "../types/tasks";
import { SessionType } from "../types/session";
import { taskServices } from "../services/tasks";


export const useGetAllTasks = (workspaceId: string, boardId: string) => {
    const { data } = useSession();
    return useQuery({
        queryKey: ["tasks", workspaceId, boardId],
        queryFn: () => taskServices.getAllTasks(data as SessionType, workspaceId, boardId)
    })
}

export const useCreateTask = (workspaceId: string, boardId: string) => {
    const queryClient = useQueryClient();
    const { data } = useSession();
    return useMutation({
        mutationKey: ["create-task"],
        mutationFn: (formData: CreateTask) => taskServices.createTask(data as SessionType, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks', workspaceId, boardId] })
        }
    })
}