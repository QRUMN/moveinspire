import React from 'react';
import { Users, Heart, Calendar } from 'lucide-react';

const stats = [
  { label: 'Active Members', value: '250+', icon: Users },
  { label: 'Success Stories', value: '50+', icon: Heart },
  { label: 'Monthly Classes', value: '120+', icon: Calendar }
];

export function CommunityHeader() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Community</h1>
        <p className="text-xl text-gray-600">
          A space where culture, movement, and wellness unite. Join our supportive network of women celebrating heritage through dance and mindful movement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-[1.02] transition-all duration-300"
          >
            <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}