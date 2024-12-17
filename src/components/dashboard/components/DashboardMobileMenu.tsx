import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { navigation } from '../constants/navigation';

interface DashboardMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardMobileMenu({ isOpen, onClose }: DashboardMobileMenuProps) {
  const location = useLocation();

  return (
    <div className={`lg:hidden fixed inset-0 flex z-40 ${isOpen ? '' : 'pointer-events-none'}`}>
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`relative flex-1 flex flex-col max-w-xs w-full bg-white transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={onClose}
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <span className="text-xl font-bold text-purple-600">Move & Inspire</span>
          </div>
          <nav className="mt-5 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                  location.pathname === item.href
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
                onClick={onClose}
              >
                <item.icon className="mr-4 h-6 w-6" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}