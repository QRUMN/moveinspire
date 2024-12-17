import React from 'react';
import { PODCAST_CATEGORIES } from '../../constants/podcastData';

interface PodcastCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function PodcastCategories({ selectedCategory, onSelectCategory }: PodcastCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {PODCAST_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}