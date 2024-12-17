import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES } from '../data';
import type { SuccessStory } from '../data';

export function SuccessStories() {
  return (
    <div className="h-full bg-white rounded-xl shadow-sm p-6 overflow-hidden">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Success Stories</h2>
      <div className="space-y-4">
        {SUCCESS_STORIES.map((story: SuccessStory) => (
          <div key={story.id} className="group cursor-pointer">
            <div className="flex items-center space-x-4 p-3 rounded-lg transition-colors duration-300 hover:bg-purple-50">
              <img
                src={story.image}
                alt={story.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-600 truncate">{story.preview}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-purple-400 transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}