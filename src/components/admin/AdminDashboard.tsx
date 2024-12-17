import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from './layout/AdminLayout';
import { AdminHome } from './pages/AdminHome';
import { UserManagement } from './pages/UserManagement';
import { ClassManagement } from './pages/ClassManagement';
import { ContentManagement } from './pages/ContentManagement';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { AdminAuthGuard } from './auth/AdminAuthGuard';

export function AdminDashboard() {
  return (
    <AdminAuthGuard>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/users/*" element={<UserManagement />} />
          <Route path="/classes/*" element={<ClassManagement />} />
          <Route path="/content/*" element={<ContentManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AdminLayout>
    </AdminAuthGuard>
  );
}