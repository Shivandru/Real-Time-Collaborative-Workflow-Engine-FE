import { Button } from '@/src/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
  return (
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
  )
}

export default Cta