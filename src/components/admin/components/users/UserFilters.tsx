```tsx
import React from 'react';
import { Filter } from 'lucide-react';

interface UserFiltersProps {
  filters: {
    status: string;
    membershipType: string;
  };
  onChange: (filters: any) => void;
}

export function UserFilters({ filters, onChange }: UserFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-gray-400 mr-2" />
        <h3 className="text-sm font-medium text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => onChange({ ...filters, status: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* Membership Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Membership Type
          </label>
          <select
            value={filters.membershipType}
            onChange={(e) => onChange({ ...filters, membershipType: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="all">All</option>
            <option value="Annual">Annual</option>
            <option value="Monthly">Monthly</option>
            <option value="Drop-in">Drop-in</option>
          </select>
        </div>

        {/* Reset Filters */}
        <button
          onClick={() => onChange({ status: 'all', membershipType: 'all' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
```