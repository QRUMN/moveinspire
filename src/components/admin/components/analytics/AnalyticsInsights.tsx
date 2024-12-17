```tsx
import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const insights = [
  {
    title: 'Membership Growth',
    metric: '+15%',
    trend: 'up',
    description: 'New member signups increased by 15% compared to last month',
    impact: 'high'
  },
  {
    title: 'Class Attendance',
    metric: '-5%',
    trend: 'down',
    description: 'Slight decrease in class attendance during evening sessions',
    impact: 'medium'
  },
  {
    title: 'Revenue Opportunity',
    metric: '$2.5k',
    trend: 'up',
    description: 'Potential revenue increase from new premium class offerings',
    impact: 'high'
  }
];

export function AnalyticsInsights() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Insights</h3>
      
      <div className="space-y-6">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900">{insight.title}</h4>
              <div className={`flex items-center ${
                insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {insight.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                <span className="font-medium">{insight.metric}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
            <div className="flex items-center">
              <AlertCircle className={`h-4 w-4 mr-1 ${
                insight.impact === 'high' ? 'text-purple-600' : 'text-yellow-600'
              }`} />
              <span className={`text-xs font-medium ${
                insight.impact === 'high' ? 'text-purple-600' : 'text-yellow-600'
              }`}>
                {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)} Impact
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-purple-600 hover:text-purple-700 font-medium text-sm">
        View All Insights
      </button>
    </div>
  );
}
```