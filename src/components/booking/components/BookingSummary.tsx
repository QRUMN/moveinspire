import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import type { TimeSlot, Class } from '../types';

interface BookingSummaryProps {
  selectedClass: Class | null;
  selectedSlot: TimeSlot | null;
  selectedDate: Date;
  onConfirm: () => void;
}

export function BookingSummary({ 
  selectedClass, 
  selectedSlot, 
  selectedDate,
  onConfirm 
}: BookingSummaryProps) {
  if (!selectedClass || !selectedSlot) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Booking Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start space-x-3">
          <Calendar className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <div className="font-medium text-gray-900">Date & Time</div>
            <div className="text-gray-600">
              {format(selectedDate, 'MMMM d, yyyy')} at {selectedSlot.time}
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <div className="font-medium text-gray-900">Class Details</div>
            <div className="text-gray-600">
              {selectedClass.name} ({selectedSlot.duration} minutes)
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <User className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <div className="font-medium text-gray-900">Instructor</div>
            <div className="text-gray-600">{selectedSlot.instructor}</div>
          </div>
        </div>
      </div>

      <button
        onClick={onConfirm}
        className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition"
      >
        Confirm Booking
      </button>
    </div>
  );
}