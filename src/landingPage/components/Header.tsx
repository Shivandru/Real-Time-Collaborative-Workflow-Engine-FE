"use client"
import Logo from '@/src/components/Logo'
import { Button } from '@/src/components/ui/button'
import Link from 'next/link'
// import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Logo />
        <div className="flex items-center gap-4">
          <Link href="/signup">
            <Button variant="ghost">Sign Up</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started Free</Button>
          </Link>
        </div>
      </header>
  )
}

export default Header