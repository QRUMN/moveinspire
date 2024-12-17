import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthGuard } from '../components/auth/AuthGuard';
import { PageLayout } from '../components/layout/PageLayout';
import { Home } from '../pages/Home';
import { LoginPage } from '../pages/LoginPage';
import { ClassesPage } from '../pages/ClassesPage';
import { CommunityPage } from '../pages/CommunityPage';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { ClassBooking } from '../pages/booking/ClassBooking';
import { AdminDashboard } from '../pages/admin/AdminDashboard';

interface AppRoutesProps {
  onJoinClick: () => void;
}

export function AppRoutes({ onJoinClick }: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<Home onJoinClick={onJoinClick} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/classes" element={
        <PageLayout>
          <ClassesPage />
        </PageLayout>
      } />
      <Route path="/community" element={
        <PageLayout>
          <CommunityPage />
        </PageLayout>
      } />
      <Route path="/dashboard/*" element={
        <AuthGuard>
          <Dashboard />
        </AuthGuard>
      } />
      <Route path="/book-class" element={
        <AuthGuard>
          <PageLayout>
            <ClassBooking />
          </PageLayout>
        </AuthGuard>
      } />
      <Route path="/admin/*" element={<AdminDashboard />} />
    </Routes>
  );
}