```tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, startOfWeek } from 'date-fns';

export function ClassScheduler() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const weekStart = startOfWeek(currentDate);

  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

  const timeSlots = Array.from({ length: 14 }).map((_, i) => {
    const hour = 6 + i; // Start at 6 AM
    return format(new Date().setHours(hour, 0), 'h:mm a');
  });

  const handlePrevWeek = () => {
    setCurrentDate(prev => addDays(prev, -7));
  };

  const handleNextWeek = () => {
    setCurrentDate(prev => addDays(prev, 7));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevWeek}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-semibold text-gray-900">
            {format(weekStart, 'MMMM d, yyyy')}
          </h3>
          <button
            onClick={handleNextWeek}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-8 gap-4 mb-4">
            <div className="text-sm font-medium text-gray-500" />
            {weekDays.map((day, i) => (
              <div key={i} className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {format(day, 'EEE')}
                </div>
                <div className="text-sm text-gray-500">
                  {format(day, 'MMM d')}
                </div>
              </div>
            ))}
          </div>

          {/* Time slots */}
          {timeSlots.map((time, i) => (
            <div key={i} className="grid grid-cols-8 gap-4 mb-4">
              <div className="text-sm text-gray-500 text-right">{time}</div>
              {weekDays.map((_, j) => (
                <div
                  key={j}
                  className="h-12 border border-gray-200 rounded-lg hover:bg-purple-50 cursor-pointer transition"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```