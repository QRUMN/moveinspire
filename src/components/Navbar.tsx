import React from 'react'
import { Menu, X, DumbellIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  onJoinClick: () => void
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const navigation = [
    { name: 'Classes', href: '/classes' },
    { name: 'Community', href: '/community' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <DumbellIcon className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
                Move Inspire
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-primary-500 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Sign in
            </Link>
            <button
              onClick={onJoinClick}
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Sign in
            </Link>
            <button
              onClick={() => {
                onJoinClick()
                setIsOpen(false)
              }}
              className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-primary-600 hover:text-primary-800 hover:bg-gray-50"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}