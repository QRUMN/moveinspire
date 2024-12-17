import React from 'react';
import { Clock } from 'lucide-react';

interface ClassSession {
  name: string;
  instructor: string;
  time: string;
  duration: string;
}

const upcomingClasses: ClassSession[] = [
  {
    name: 'Hip-Hop',
    instructor: 'Sarah Johnson',
    time: 'Today at 6:00 PM',
    duration: '60 min'
  },
  {
    name: 'Stretch & Release',
    instructor: 'Emma Davis',
    time: 'Tomorrow at 7:00 PM',
    duration: '45 min'
  }
];

export function UpcomingClasses() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Classes</h2>
      <div className="space-y-4">
        {upcomingClasses.map((cls, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-purple-200 transition"
          >
            <div>
              <h3 className="font-medium text-gray-900">{cls.name}</h3>
              <p className="text-sm text-gray-600">with {cls.instructor}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-gray-600 mb-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{cls.time}</span>
              </div>
              <div className="text-sm text-gray-500">{cls.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}