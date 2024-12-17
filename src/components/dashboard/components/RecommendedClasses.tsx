import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CLASSES_DATA } from '../../classes/data';

export function RecommendedClasses() {
  const navigate = useNavigate();
  const recommendedClasses = CLASSES_DATA.slice(0, 2);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Classes</h2>
        <button 
          onClick={() => navigate('/classes')}
          className="text-purple-600 hover:text-purple-700 font-medium flex items-center"
        >
          View All
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {recommendedClasses.map((cls) => (
          <div key={cls.id} className="group cursor-pointer" onClick={() => navigate('/book-class', { state: { classId: cls.id } })}>
            <div className="relative h-32 rounded-lg overflow-hidden mb-3">
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
              {cls.name}
            </h3>
            <p className="text-sm text-gray-600">{cls.schedule[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}