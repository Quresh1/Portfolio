import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Shahab Quresh</Link>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/projects" className="hover:text-blue-500">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  )
}