import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClassCard } from './ClassCard';
import type { Class } from '../types';

interface ClassGridProps {
  classes: Class[];
}

export function ClassGrid({ classes }: ClassGridProps) {
  const navigate = useNavigate();

  const handleBookClick = (classId: string) => {
    navigate('/book-class', { state: { classId } });
  };

  if (classes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No classes match your current filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {classes.map((classData) => (
        <ClassCard
          key={classData.id}
          classData={classData}
          onBookClick={handleBookClick}
        />
      ))}
    </div>
  );
}