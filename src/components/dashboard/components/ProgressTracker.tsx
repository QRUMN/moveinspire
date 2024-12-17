import React from 'react';
import { Trophy, TrendingUp, Target } from 'lucide-react';
import { BackButton } from '../../common/BackButton';

export function ProgressTracker() {
  const goals = [
    { name: 'Classes Attended', current: 12, target: 15 },
    { name: 'Active Minutes', current: 720, target: 1000 },
    { name: 'Wellness Score', current: 85, target: 100 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <BackButton to="/dashboard" label="Back to Dashboard" />
        <h1 className="text-2xl font-bold text-gray-900">Progress Tracker</h1>
      </div>

      {/* Monthly Goals */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Monthly Goals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <div key={goal.name} className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">{goal.name}</h3>
              <div className="flex items-end justify-between mb-2">
                <div className="text-2xl font-bold text-purple-600">{goal.current}</div>
                <div className="text-sm text-gray-600">Target: {goal.target}</div>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-purple-600 rounded-full"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Trophy, name: 'First Class', date: 'Jan 15, 2024' },
            { icon: TrendingUp, name: '5 Class Streak', date: 'Jan 25, 2024' },
            { icon: Target, name: 'Goal Crusher', date: 'Feb 1, 2024' }
          ].map((badge, index) => (
            <div key={index} className="text-center p-4 bg-purple-50 rounded-lg">
              <badge.icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">{badge.name}</h3>
              <p className="text-sm text-gray-600">{badge.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Activity History</h2>
        <div className="h-64 flex items-end justify-between space-x-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex-1">
              <div 
                className="bg-purple-600 rounded-t-lg hover:bg-purple-700 transition-all cursor-pointer"
                style={{ height: `${Math.random() * 100}%` }}
              />
              <div className="text-xs text-gray-600 text-center mt-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}