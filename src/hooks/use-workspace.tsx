import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { workSpaceServices } from "../services/workspace"
import { useSession } from "next-auth/react"
import { SessionType } from "../types/session";
import { CreateWorkspace } from "../types/workspace";
export const useGetAllWorkspaces = () => {
    const { data } = useSession();
    return useQuery({
        queryKey: ['workspaces'],
        queryFn: () => workSpaceServices.getAllWorkspaces(data as SessionType)
    })
}

export const useCreateWorkspace = () => {
    const queryClient = useQueryClient();
    const { data } = useSession();
    return useMutation({
        mutationFn: (formData: CreateWorkspace) => workSpaceServices.createWorkspace(data as SessionType, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['workspaces'] })
        }
    })
}