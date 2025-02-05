"use client"  // Marking the component as a Client Component

import Link from "next/link"
import { usePathname } from "next/navigation" // Use this hook instead of useRouter

const Header = () => {
  const pathname = usePathname() // Get the current path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {/* Conditionally render the "Home" link */}
          {pathname !== "/" && (
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
          )}
          <li>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
