import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="projects" className="text-gray-300 hover:text-white transition-colors">
              /projects
            </Link>
          </li>
          <li>
            <Link href="about" className="text-gray-300 hover:text-white transition-colors">
              /about
            </Link>
          </li>
          <li>
            <Link href="contact" className="text-gray-300 hover:text-white transition-colors">
              /contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

