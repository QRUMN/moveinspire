import React from 'react';
import { Clock, Users, Zap, Calendar } from 'lucide-react';
import type { Class } from '../types';

interface ClassCardProps {
  classData: Class;
  onBookClick: (classId: string) => void;
}

export function ClassCard({ classData, onBookClick }: ClassCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm group transform hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48">
        <img
          src={classData.image}
          alt={classData.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${classData.level === 'Beginner' ? 'bg-green-100 text-green-700' :
              classData.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'}
          `}>
            {classData.level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{classData.name}</h3>
        <p className="text-gray-600 mb-4">{classData.description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{classData.duration} minutes</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{classData.schedule.join(' • ')}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Zap className="h-5 w-5 mr-2" />
            <span>{classData.intensity} Intensity</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2" />
            <span>{classData.capacity} spots per class</span>
          </div>
        </div>

        <button
          onClick={() => onBookClick(classData.id)}
          className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition"
        >
          Book Class
        </button>
      </div>
    </div>
  );
}