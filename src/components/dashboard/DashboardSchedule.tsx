import React from 'react';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { BackButton } from '../common/BackButton';

export function DashboardSchedule() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <BackButton to="/dashboard" label="Back to Dashboard" />
          <h1 className="text-2xl font-bold text-gray-900">My Schedule</h1>
        </div>
        <Link
          to="/book-class"
          className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          Book New Class
        </Link>
      </div>

      {/* Rest of the component remains the same */}
    </div>
  );
}