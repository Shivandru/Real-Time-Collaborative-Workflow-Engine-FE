"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateBoardList, createboardListSchema } from "@/src/types/boardList";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useCreateBoardList } from "@/src/hooks/use-boardList";

type BoardListFormProps = {
  isOpen: boolean;
  onClose: () => void;
  workspaceId: string;
  boardId: string;
};

const BoardListForm = ({
  isOpen,
  onClose,
  workspaceId,
  boardId,
}: BoardListFormProps) => {
  const { data: sessionData } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateBoardList>({
    resolver: zodResolver(createboardListSchema),
    defaultValues: {
      title: "",
      boardId: "",
      workspaceId: "",
      createdBy: "",
    },
  });
  const { mutate: createList } = useCreateBoardList(workspaceId, boardId)
  useEffect(() => {
    reset({
      title: "",
      boardId,
      workspaceId,
      createdBy: sessionData?.user?.email || "",
    });
  }, [reset, boardId, workspaceId, sessionData?.user?.email]);
  
  async function onSubmit(formData: CreateBoardList) {
    console.log("boardList formdata", formData);
    createList(formData,{
        onSuccess: () => {
            onClose();
            reset();
        }
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new List</DialogTitle>
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

export default BoardListForm;
