"use client"
import { Layout, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/src/components/Logo";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Logo />
        <div className="flex items-center gap-4">
          <Link href="/signup">
            <Button variant="ghost">Sign Up</Button>
          </Link>
          <Button variant="ghost" onClick={async ()=> await signOut({ redirect: false })}>Sign out</Button>
          <Link href="/signup">
            <Button>Get Started Free</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Organize your work,
          <br />
          <span className="text-primary">simplify your life</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          TaskFlow brings all your tasks, teammates, and tools together. 
          Keep everything in the same place—even if your team isn&apos;t.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8">
              Start for free
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Watch demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need to stay organized
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Layout className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Boards</h3>
            <p className="text-muted-foreground">
              Visualize your project with customizable boards. Drag and drop tasks between columns.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              Work together seamlessly. Assign tasks, leave comments, and track progress in real-time.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <p className="text-muted-foreground">
              Automate repetitive tasks and workflows. Save time and reduce manual work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of teams already using TaskFlow
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Sign up for free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layout className="h-5 w-5 text-primary" />
            <span className="font-semibold">TaskFlow</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 TaskFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
