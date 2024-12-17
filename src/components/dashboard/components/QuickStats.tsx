import React from 'react';
import { Calendar, Trophy, Users } from 'lucide-react';

interface QuickStat {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
}

const stats: QuickStat[] = [
  {
    title: 'Next Class',
    value: 'Hip-Hop',
    subtitle: 'Today at 6:00 PM',
    icon: Calendar
  },
  {
    title: 'Classes This Month',
    value: '12',
    subtitle: '4 more than last month',
    icon: Trophy
  },
  {
    title: 'Community',
    value: '250+',
    subtitle: 'Active members',
    icon: Users
  }
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">{stat.title}</h3>
            <stat.icon className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
          <p className="text-gray-600">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
}