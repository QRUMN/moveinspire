import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  User,
  Heart,
  MessageSquare,
  Settings as SettingsIcon,
  Wallet,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { DashboardSidebar } from './components/DashboardSidebar';
import { DashboardMobileMenu } from './components/DashboardMobileMenu';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu */}
      <DashboardMobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Desktop sidebar */}
      <DashboardSidebar onLogout={logout} />

      {/* Mobile header */}
      <div className="lg:hidden">
        <div className="py-2 px-4 bg-white border-b border-gray-200 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-purple-600">Move & Inspire</span>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}