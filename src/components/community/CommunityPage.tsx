import React from 'react';
import { Container } from '../layout/Container';
import { Grid } from '../layout/Grid';
import { CommunityHeader } from './components/CommunityHeader';
import { MemberSpotlight } from './components/MemberSpotlight';
import { SuccessStories } from './components/SuccessStories';
import { EventsList } from './components/EventsList';
import { CommunityFeed } from './components/CommunityFeed';
import { BackButton } from '../common/BackButton';

export function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <BackButton to="/" label="Back to Home" />
        
        <CommunityHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Member Spotlight */}
          <div className="lg:col-span-2">
            <MemberSpotlight />
          </div>

          {/* Right Column - Success Stories */}
          <div>
            <SuccessStories />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Community Feed */}
          <div className="lg:col-span-2">
            <CommunityFeed />
          </div>

          {/* Sidebar - Events */}
          <div className="space-y-6">
            <EventsList />
          </div>
        </div>
      </Container>
    </div>
  );
}