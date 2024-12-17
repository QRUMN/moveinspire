import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { DashboardHome } from '../../components/dashboard/DashboardHome';
import { DashboardProfile } from '../../components/dashboard/DashboardProfile';
import { DashboardSchedule } from '../../components/dashboard/DashboardSchedule';
import { DashboardFavorites } from '../../components/dashboard/components/DashboardFavorites';
import { DashboardMessages } from '../../components/dashboard/components/DashboardMessages';
import { DashboardSettings } from '../../components/dashboard/components/DashboardSettings';
import { DashboardWallet } from '../../components/dashboard/components/DashboardWallet';
import { MembershipDetails } from '../../components/dashboard/components/MembershipDetails';
import { ProgressTracker } from '../../components/dashboard/components/ProgressTracker';

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