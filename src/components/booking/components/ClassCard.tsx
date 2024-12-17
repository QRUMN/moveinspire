import React from 'react';
import { Clock, Users } from 'lucide-react';
import { ClassSession } from '../types';

interface ClassCardProps {
  session: ClassSession;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function ClassCard({ session, isSelected, onSelect }: ClassCardProps) {
  return (
    <div
      className={`border-2 rounded-xl p-6 transition cursor-pointer ${
        isSelected
          ? 'border-purple-600 bg-purple-50'
          : 'border-gray-200 hover:border-purple-200'
      }`}
      onClick={() => onSelect(session.id)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{session.name}</h3>
          <p className="text-gray-600">with {session.instructor}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center text-gray-600 mb-1">
            <Clock className="h-4 w-4 mr-1" />
            <span>{session.time}</span>
          </div>
          <div className="text-sm text-gray-500">{session.duration}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-2" />
          <span>{session.spotsLeft} spots left</span>
        </div>
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${
            isSelected
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
          }`}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
}