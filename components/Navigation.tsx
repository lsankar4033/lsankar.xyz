'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="flex items-center justify-center space-x-4 text-lg font-work-sans">
      <Link 
        href="/" 
        className={`hover:text-blue-600 transition-colors ${
          isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700'
        }`}
      >
        About
      </Link>
      <span className="text-gray-400">|</span>
      <Link 
        href="/work" 
        className={`hover:text-blue-600 transition-colors ${
          isActive('/work') ? 'text-blue-600 font-medium' : 'text-gray-700'
        }`}
      >
        Work
      </Link>
      <span className="text-gray-400">|</span>
      <Link 
        href="/life" 
        className={`hover:text-blue-600 transition-colors ${
          isActive('/life') ? 'text-blue-600 font-medium' : 'text-gray-700'
        }`}
      >
        Life
      </Link>
    </nav>
  )
}