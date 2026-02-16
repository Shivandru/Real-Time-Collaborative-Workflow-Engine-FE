import Header from '@/app/home/components/Header'
import React from 'react'

const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col w-full h-screen overflow-y-auto'>
        <Header />
        {children}
    </div>
  )
}

export default WorkspaceLayout