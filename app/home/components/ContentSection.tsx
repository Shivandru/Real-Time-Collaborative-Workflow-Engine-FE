"use client";
import { Card } from "@/src/components/ui/card";
import { useGetAllWorkspaces } from "@/src/hooks/use-workspace";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import WorkspaceCreationForm from "./WorkspaceCreationForm";

const ContentSection = () => {
  const router = useRouter();
  const [openWorkspaceForm, setOpenWorkspaceForm] = useState(false);
  const { data: workspaces } = useGetAllWorkspaces();

  function handleCloseWorkspaceForm() {
    setOpenWorkspaceForm(false);
  }

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="space-y-10">
        {workspaces?.map((workspace) => (
          <Card
            key={workspace.workspaceId}
            className="cursor-pointer hover:bg-muted/70 transition-colors border p-5 rounded-xl"
            onClick={() => router.push(`/workspace/${workspace.workspaceId}`)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="font-semibold text-base">
                  {workspace.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {workspace.members.length} members
                </span>
              </div>

              {/* RIGHT: Avatar Stack */}
              <div className="flex items-center -space-x-3">
                {workspace.members.slice(0, 4).map((memberId, idx) => (
                  <div
                    key={idx}
                    className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs ring-2 ring-background"
                  >
                    {/* Temporary initials until you map real user info */}
                    {memberId.slice(0, 2).toUpperCase()}
                  </div>
                ))}

                {/* If more than 4 members show +X */}
                {workspace.members.length > 4 && (
                  <div className="h-8 w-8 rounded-full bg-muted text-foreground flex items-center justify-center text-xs ring-2 ring-background">
                    +{workspace.members.length - 4}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}

        <Card
          className="cursor-pointer hover:bg-muted/50 transition-colors border-dashed p-6"
          onClick={() => setOpenWorkspaceForm(true)}
        >
          <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Plus className="h-6 w-6" />
            <span className="font-medium">Create new workspace</span>
          </div>
        </Card>
      </div>
      <WorkspaceCreationForm
        isOpen={openWorkspaceForm}
        onClose={handleCloseWorkspaceForm}
      />
    </main>
  );
};

export default ContentSection;
