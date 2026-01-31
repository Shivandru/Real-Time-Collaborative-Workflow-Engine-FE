"use client"
import { Card, CardContent } from '@/src/components/ui/card'
import { mockWorkspaces } from '@/src/data/mockData'
import { cn } from '@/src/lib/utils'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import BoardCreationForm from './BoardCreationForm'
import WorkspaceCreationForm from './WorkspaceCreationForm'

const ContentSection = () => {
  const [openBoardForm, setOpenBoardForm] = useState(false);
  const [openWorkspaceForm, setOpenWorkspaceForm] = useState(false);
  function handleCloseBoardForm(){
    setOpenBoardForm(false);
  }
  function handleCloseWorkspaceForm(){
    setOpenWorkspaceForm(false);
  }
  return (
    <main className="container mx-auto px-4 py-8">
        <div className="space-y-10">
          {mockWorkspaces.map((workspace) => (
            <section key={workspace.id}>
              {/* Workspace Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-lg font-bold text-primary-foreground">
                  {workspace.name[0]}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {workspace.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {workspace.boards.length} board{workspace.boards.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Boards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {workspace.boards.map((board) => (
                  <Link key={board.id} href="/dashboard">
                    <Card className="group cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all duration-200 overflow-hidden">
                      {/* Board Color Header */}
                      <div className={cn("h-24 relative", board.color)}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {board.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {board.columns.reduce((acc, col) => acc + col.tasks.length, 0)} tasks
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}

                <Card className="cursor-pointer hover:bg-muted/50 transition-colors border-dashed" onClick={()=>setOpenBoardForm(true)}>
                  <div className="h-full min-h-[156px] flex flex-col items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <Plus className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">Create new board</span>
                  </div>
                </Card>
              </div>
            </section>
          ))}

          {/* Create New Workspace */}
          <Card className="cursor-pointer hover:bg-muted/50 transition-colors border-dashed p-6" onClick={()=>setOpenWorkspaceForm(true)}>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <Plus className="h-6 w-6" />
              <span className="font-medium">Create new workspace</span>
            </div>
          </Card>
        </div>
        <BoardCreationForm isOpen={openBoardForm} onClose={handleCloseBoardForm} />
        <WorkspaceCreationForm isOpen={openWorkspaceForm} onClose={handleCloseWorkspaceForm} />
      </main>
  )
}

export default ContentSection