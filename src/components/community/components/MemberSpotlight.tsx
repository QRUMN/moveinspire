import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FEATURED_MEMBER } from '../data';

export function MemberSpotlight() {
  return (
    <div className="h-full bg-white rounded-xl shadow-sm overflow-hidden group">
      <div className="relative h-full">
        <img
          src={FEATURED_MEMBER.image}
          alt={FEATURED_MEMBER.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="flex items-center mb-2">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="font-medium text-white">Member Spotlight</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{FEATURED_MEMBER.name}</h2>
          <p className="text-white/80 mb-4">{FEATURED_MEMBER.title}</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Quote className="h-6 w-6 text-white/80 mb-2" />
            <p className="text-white/90 italic text-sm">{FEATURED_MEMBER.quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}