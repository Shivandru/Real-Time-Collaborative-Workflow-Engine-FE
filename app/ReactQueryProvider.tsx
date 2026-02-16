"use client"
import { ReactNode, useState } from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

type PropsType = {
    children: ReactNode
}

const ReactQueryProvider = ({ children }: PropsType) => {
    const [client] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider