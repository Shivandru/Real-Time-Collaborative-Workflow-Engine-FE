import { Layout } from 'lucide-react'
import Link from 'next/link'

const Logo = () => {
  return (
    <header>
        <Link href="/" className="flex items-center gap-2 w-fit">
          <Layout className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">TaskFlow</span>
        </Link>
      </header>
  )
}

export default Logo