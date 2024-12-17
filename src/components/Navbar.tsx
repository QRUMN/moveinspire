import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Classes', href: '/classes' },
    { name: 'Community', href: '/community' },
    { name: 'Membership', href: '/#membership' }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">Move Inspire</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={onJoinClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                onJoinClick();
                setIsOpen(false);
              }}
              className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}