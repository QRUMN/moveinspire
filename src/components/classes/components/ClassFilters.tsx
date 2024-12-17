import React from 'react';
import { Search } from 'lucide-react';
import type { ClassFilters as Filters } from '../types';

interface ClassFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function ClassFilters({ filters, onChange }: ClassFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Classes
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Search by name..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Level
        </label>
        <div className="space-y-2">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="radio"
                checked={filters.level === level}
                onChange={() => onChange({ ...filters, level })}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-2 text-gray-600">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Intensity
        </label>
        <div className="space-y-2">
          {['All', 'Low', 'Medium', 'High'].map((intensity) => (
            <label key={intensity} className="flex items-center">
              <input
                type="radio"
                checked={filters.intensity === intensity}
                onChange={() => onChange({ ...filters, intensity })}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-2 text-gray-600">{intensity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}