import React from 'react';
import { Hero } from '../components/Hero';
import { Classes } from '../components/Classes';
import { Membership } from '../components/Membership';

interface HomeProps {
  onJoinClick: () => void;
}

export function Home({ onJoinClick }: HomeProps) {
  return (
    <div className="min-h-screen bg-white">
      <Hero onJoinClick={onJoinClick} />
      <Classes />
      <Membership onJoinClick={onJoinClick} />
    </div>
  );
}