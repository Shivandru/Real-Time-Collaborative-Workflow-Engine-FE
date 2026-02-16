"use client";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateBoard, createBoardSchema } from "@/src/types/boardType";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { useParams } from "next/navigation";
import { useCreateBoard } from "@/src/hooks/use-board";

type BoardCreationFormProps = {
  isOpen: boolean;
  onClose: () => void;
  workspaceId: string;
};

const BoardCreationForm = ({ isOpen, onClose, workspaceId }: BoardCreationFormProps) => {

  const { data: sessionData } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<CreateBoard>({
    resolver: zodResolver(createBoardSchema),
    defaultValues: {
      title: "",
      workspaceId: "",
      visibility: "WORKSPACE",
      createdBy: "",
    },
  });
  const { mutate: createBoard } = useCreateBoard(workspaceId)

  useEffect(() => {
    if (sessionData) {
      reset({
        createdBy: sessionData.user.email,
        visibility: "WORKSPACE",
        workspaceId: workspaceId
      });
    }
  }, [sessionData, reset, workspaceId]);

  function onSubmit(formData: CreateBoard) {
    console.log({formData});
    createBoard(formData, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  }

  if(!workspaceId || !sessionData || !isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new board</DialogTitle>
        </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
            <Label className="text-xs tracking-wide">Title</Label>
            <Input {...register("title")} className="outline-none" />
            {errors.title && (
              <span className="text-xs text-red-500">
                {errors.title.message}
              </span>
            )}
            </div>
            <div className="flex flex-col gap-2">
            <Label className="text-xs tracking-wide">Visibility</Label>
            <Select value={watch("visibility")} onValueChange={(value) => setValue("visibility", value as "WORKSPACE" | "PRIVATE")}>
              <SelectTrigger>
              <SelectValue placeholder="Select visibility" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WORKSPACE">Workspace</SelectItem>
                <SelectItem value="PRIVATE">Private</SelectItem>
              </SelectContent>
            </Select>
            {errors.visibility && (
              <span className="text-xs text-red-500">
                {errors.visibility.message}
              </span>
            )}
            </div>
            <Button
              size="sm"
              variant="default"
              className="text-xs tracking-wide"
              type="submit"
            >
              Save
            </Button>
        </div>
          </form>
      </DialogContent>
    </Dialog>
  );
};

export default BoardCreationForm;
