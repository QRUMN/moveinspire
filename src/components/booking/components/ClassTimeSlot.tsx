import React from 'react';
import { Clock, Users } from 'lucide-react';
import type { TimeSlot } from '../types';

interface ClassTimeSlotProps {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: (slotId: string) => void;
}

export function ClassTimeSlot({ slot, isSelected, onSelect }: ClassTimeSlotProps) {
  return (
    <button
      onClick={() => onSelect(slot.id)}
      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
        isSelected 
          ? 'border-purple-600 bg-purple-50'
          : 'border-gray-200 hover:border-purple-200'
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-gray-900">{slot.time}</h3>
          <p className="text-sm text-gray-600">with {slot.instructor}</p>
        </div>
        <div className="flex items-center text-sm">
          <Users className="h-4 w-4 text-gray-400 mr-1" />
          <span className={`font-medium ${
            slot.spotsLeft <= 3 ? 'text-red-600' : 'text-gray-600'
          }`}>
            {slot.spotsLeft} spots left
          </span>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <Clock className="h-4 w-4 mr-1" />
        <span>{slot.duration} minutes</span>
      </div>
    </button>
  );
}