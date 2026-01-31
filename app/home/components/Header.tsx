"use client"
import Logo from '@/src/components/Logo'
import { Button } from '@/src/components/ui/button'
import { LogOut, Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signOut } from "next-auth/react";

const Header = () => {
    const router = useRouter();
  return (
    <header className="border-b bg-card">
        <div className="container mx-auto px-4 flex items-center justify-between">
            <Logo/>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={async () => {
                await signOut({ redirect: false })
                router.replace("/")
            }}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
  )
}

export default Header