import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './DashboardLayout';
import { DashboardHome } from './DashboardHome';
import { DashboardProfile } from './DashboardProfile';
import { DashboardSchedule } from './DashboardSchedule';
import { DashboardFavorites } from './components/DashboardFavorites';
import { DashboardMessages } from './components/DashboardMessages';
import { DashboardSettings } from './components/DashboardSettings';
import { DashboardWallet } from './components/DashboardWallet';
import { MembershipDetails } from './components/MembershipDetails';
import { ProgressTracker } from './components/ProgressTracker';

export function Dashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/profile" element={<DashboardProfile />} />
        <Route path="/schedule" element={<DashboardSchedule />} />
        <Route path="/favorites" element={<DashboardFavorites />} />
        <Route path="/messages" element={<DashboardMessages />} />
        <Route path="/settings" element={<DashboardSettings />} />
        <Route path="/wallet" element={<DashboardWallet />} />
        <Route path="/membership" element={<MembershipDetails />} />
        <Route path="/progress" element={<ProgressTracker />} />
      </Routes>
    </DashboardLayout>
  );
}