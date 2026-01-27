"use client"
import { useState } from "react";
import { mockWorkspaces } from "@/src/data/mockData";
import { Board } from "@/types/board";
import { WorkspaceSidebar } from './components/WorkspaceSidebar';
import { BoardView } from './components/BoardView';

const DashboardPage = () => {
    const [selectedBoard, setSelectedBoard] = useState<Board | null>(
        mockWorkspaces[0]?.boards[0] || null
    );
    return (
        <div className="flex h-screen bg-background">
            <WorkspaceSidebar
                workspaces={mockWorkspaces}
                selectedBoard={selectedBoard}
                onSelectBoard={setSelectedBoard}
            />

            <main className="flex-1 overflow-hidden">
                {selectedBoard ? (
                    <BoardView board={selectedBoard} />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        Select a board to get started
                    </div>
                )}
            </main>
        </div>
    )
}

export default DashboardPage