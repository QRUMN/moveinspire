import React from 'react';
import { BarChart2, TrendingUp, Users, DollarSign } from 'lucide-react';
import { AnalyticsMetrics } from '../components/analytics/AnalyticsMetrics';
import { AnalyticsCharts } from '../components/analytics/AnalyticsCharts';
import { AnalyticsInsights } from '../components/analytics/AnalyticsInsights';

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track performance and growth metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 12 months</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Export Report
          </button>
        </div>
      </div>

      <AnalyticsMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AnalyticsCharts />
        </div>
        <div>
          <AnalyticsInsights />
        </div>
      </div>
    </div>
  );
}