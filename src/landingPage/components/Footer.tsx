import { Layout } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer