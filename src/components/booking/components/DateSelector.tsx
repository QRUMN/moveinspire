import React from 'react';
import { format, isSameDay } from 'date-fns';

interface DateSelectorProps {
  dates: Date[];
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export function DateSelector({ dates, selectedDate, onSelectDate }: DateSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h2>
      <div className="space-y-2">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => onSelectDate(date)}
            className={`w-full px-4 py-3 rounded-lg text-left transition ${
              isSameDay(selectedDate, date)
                ? 'bg-purple-600 text-white'
                : 'hover:bg-purple-50'
            }`}
          >
            <div className="font-medium">
              {format(date, 'EEEE')}
            </div>
            <div className="text-sm opacity-80">
              {format(date, 'MMMM d')}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}