```tsx
import React from 'react';
import { UserPlus, CalendarPlus, FileText, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      label: 'Add New Member',
      icon: UserPlus,
      color: 'purple',
      onClick: () => navigate('/admin/users/new')
    },
    {
      label: 'Schedule Class',
      icon: CalendarPlus,
      color: 'blue',
      onClick: () => navigate('/admin/classes/new')
    },
    {
      label: 'Create Post',
      icon: FileText,
      color: 'green',
      onClick: () => navigate('/admin/content/new')
    },
    {
      label: 'Send Notification',
      icon: Bell,
      color: 'pink',
      onClick: () => navigate('/admin/notifications/new')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
      <div className="space-y-4">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition group"
          >
            <action.icon className="h-5 w-5 text-gray-400 group-hover:text-purple-600 mr-3" />
            <span className="text-gray-700 group-hover:text-gray-900">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
```