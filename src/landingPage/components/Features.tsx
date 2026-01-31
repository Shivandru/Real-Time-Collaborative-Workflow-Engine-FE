import { Layout, Users, Zap } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
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
  )
}

export default Features