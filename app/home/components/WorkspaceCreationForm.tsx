"use client"
import { Button } from '@/src/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/src/components/ui/dialog'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateWorkspace, createWorkspaceSchema } from "@/types/workspace"
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

type WorkspaceCreationFormType = {
    isOpen: boolean
    onClose: () => void
}

const WorkspaceCreationForm = ({ isOpen, onClose }: WorkspaceCreationFormType) => {
  const { data } = useSession();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateWorkspace>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      title: "",
      createdBy: "",
    }
  });

  useEffect(()=>{
    if(data){
      reset({
        createdBy: data.user?.name
      })
    }
  },[data, reset])

  console.log("session data", data);

  function onSubmit(data: CreateWorkspace) {
    console.log(data);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create a new Workspace</DialogTitle>
      </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
            <Label className='text-xs tracking-wide'>Title</Label>
            <Input {...register("title")} className='outline-none'/>
            {errors.title && <span className='text-xs text-red-500'>{errors.title.message}</span>}
            <Button type="submit">Save</Button>
          </div>
        </form>
    </DialogContent>
  </Dialog>
  )
}

export default WorkspaceCreationForm