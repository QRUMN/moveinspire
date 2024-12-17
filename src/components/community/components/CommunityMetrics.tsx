import React from 'react';
import { Users, Calendar, Trophy } from 'lucide-react';
import { COMMUNITY_METRICS } from '../data';

interface CommunityMetricsProps {
  metric: keyof typeof COMMUNITY_METRICS;
}

const METRIC_CONFIG = {
  activeMembers: {
    icon: Users,
    label: 'Active Members',
    gradient: 'from-purple-500 to-pink-500'
  },
  monthlyClasses: {
    icon: Calendar,
    label: 'Classes This Month',
    gradient: 'from-blue-500 to-cyan-500'
  },
  successStories: {
    icon: Trophy,
    label: 'Success Stories',
    gradient: 'from-green-500 to-emerald-500'
  }
};

export function CommunityMetrics({ metric }: CommunityMetricsProps) {
  const config = METRIC_CONFIG[metric];
  const Icon = config.icon;

  return (
    <div className="h-full bg-white rounded-xl shadow-sm overflow-hidden group">
      <div className={`h-full p-6 bg-gradient-to-br ${config.gradient} bg-opacity-10 
        group-hover:bg-opacity-20 transition-all duration-300`}>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Icon className="h-8 w-8 mb-3 text-gray-900" />
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {COMMUNITY_METRICS[metric]}
          </div>
          <div className="text-sm text-gray-600">{config.label}</div>
        </div>
      </div>
    </div>
  );
}