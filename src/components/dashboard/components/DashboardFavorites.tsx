import React from 'react';
import { Heart, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../common/BackButton';
import { CLASSES_DATA } from '../../classes/data';

export function DashboardFavorites() {
  const navigate = useNavigate();
  const favoriteClasses = CLASSES_DATA.slice(0, 3); // Demo data

  return (
    <div className="space-y-8">
      <div>
        <BackButton to="/dashboard" label="Back to Dashboard" />
        <h1 className="text-2xl font-bold text-gray-900">Favorite Classes</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteClasses.map((cls) => (
          <div key={cls.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
            <div className="relative h-48">
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-purple-600 hover:bg-white transition-colors">
                <Heart className="h-5 w-5 fill-current" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cls.name}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{cls.schedule[0]}</span>
              </div>
              <button
                onClick={() => navigate('/book-class', { state: { classId: cls.id } })}
                className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}