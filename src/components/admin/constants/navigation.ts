import { 
  LayoutDashboard, 
  Users, 
  Calendar,
  FileText,
  BarChart2,
  Settings
} from 'lucide-react';

export const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Classes', href: '/admin/classes', icon: Calendar },
  { name: 'Content', href: '/admin/content', icon: FileText },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];