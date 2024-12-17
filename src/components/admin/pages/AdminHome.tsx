```tsx
import React from 'react';
import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import { AdminMetricsGrid } from '../components/AdminMetricsGrid';
import { RecentActivityList } from '../components/RecentActivityList';
import { QuickActions } from '../components/QuickActions';

export function AdminHome() {
  const metrics = [
    {
      label: 'Total Members',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      label: 'Active Classes',
      value: '45',
      change: '+5%',
      trend: 'up',
      icon: Calendar,
      color: 'blue'
    },
    {
      label: 'Monthly Revenue',
      value: '$24,500',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      label: 'Member Retention',
      value: '92%',
      change: '+2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'pink'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Export Report
          </button>
        </div>
      </div>

      <AdminMetricsGrid metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivityList />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
```