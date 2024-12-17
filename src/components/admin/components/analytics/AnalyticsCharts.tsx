```tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

export function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        
        <div className="h-64">
          <div className="h-full flex items-end space-x-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-purple-600 rounded-t-lg hover:bg-purple-700 transition-all cursor-pointer"
                  style={{ height: `${Math.random() * 100}%` }}
                />
                <div className="text-xs text-gray-600 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Member Growth Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Member Growth</h3>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Last 6 months</option>
            <option>Last 12 months</option>
          </select>
        </div>
        
        <div className="h-64">
          <div className="h-full flex items-end space-x-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-600 rounded-t-lg hover:bg-blue-700 transition-all cursor-pointer"
                  style={{ height: `${Math.random() * 100}%` }}
                />
                <div className="text-xs text-gray-600 mt-2">
                  {['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```