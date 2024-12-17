```tsx
import React from 'react';
import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react';

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

export function AnalyticsMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${
              metric.color === 'purple' ? 'bg-purple-50 text-purple-600' :
              metric.color === 'blue' ? 'bg-blue-50 text-blue-600' :
              metric.color === 'green' ? 'bg-green-50 text-green-600' :
              'bg-pink-50 text-pink-600'
            }`}>
              <metric.icon className="h-6 w-6" />
            </div>
            <div className={`flex items-center ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{metric.change}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {metric.value}
          </h3>
          <p className="text-gray-600">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
```