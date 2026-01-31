"use client"
import { Button } from '@/src/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
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
  )
}

export default Hero