import React from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  onJoinClick: () => void
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">Move Inspire</span>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={onJoinClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Join Now
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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
            <button
              onClick={() => {
                onJoinClick()
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-base font-medium text-primary-600 hover:text-primary-800 hover:bg-gray-50"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}