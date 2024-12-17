```tsx
import React from 'react';
import { User, Calendar, DollarSign } from 'lucide-react';
import { timeAgo } from '../utils/dateUtils';

const RECENT_ACTIVITIES = [
  {
    id: 1,
    type: 'new_member',
    user: 'Sarah Johnson',
    action: 'joined as a new member',
    timestamp: new Date(Date.now() - 1800000),
    icon: User,
    color: 'purple'
  },
  {
    id: 2,
    type: 'class_booking',
    user: 'Emma Davis',
    action: 'booked Hip-Hop Flow class',
    timestamp: new Date(Date.now() - 3600000),
    icon: Calendar,
    color: 'blue'
  },
  {
    id: 3,
    type: 'payment',
    user: 'Maya Thompson',
    action: 'renewed monthly subscription',
    timestamp: new Date(Date.now() - 7200000),
    icon: DollarSign,
    color: 'green'
  }
];

export function RecentActivityList() {
  const getIconColor = (color: string) => {
    const colorMap = {
      purple: 'bg-purple-100 text-purple-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {RECENT_ACTIVITIES.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div className={`p-2 rounded-lg ${getIconColor(activity.color)}`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span>
                {' '}{activity.action}
              </p>
              <p className="text-sm text-gray-500">
                {timeAgo(activity.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```