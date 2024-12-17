import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { QuickStats } from './components/QuickStats';
import { UpcomingClasses } from './components/UpcomingClasses';
import { RecommendedClasses } from './components/RecommendedClasses';
import { PodcastSection } from './components/PodcastSection';
import { useAuth } from '../../context/AuthContext';

export function DashboardHome() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.firstName || 'there'}!
        </h1>
        <Link
          to="/book-class"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          Book a Class
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <QuickStats />
      <UpcomingClasses />
      <RecommendedClasses />
      <PodcastSection />
    </div>
  );
}