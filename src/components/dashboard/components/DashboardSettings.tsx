import React from 'react';
import { Bell, Shield, Eye, Globe } from 'lucide-react';
import { BackButton } from '../../common/BackButton';

export function DashboardSettings() {
  return (
    <div className="space-y-8">
      <div>
        <BackButton to="/dashboard" label="Back to Dashboard" />
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Bell className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        </div>
        <div className="space-y-4">
          {[
            'Class reminders',
            'New messages',
            'Community updates',
            'Special offers'
          ].map((setting) => (
            <label key={setting} className="flex items-center justify-between">
              <span className="text-gray-700">{setting}</span>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Privacy */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">Privacy</h2>
        </div>
        <div className="space-y-4">
          {[
            'Show profile to other members',
            'Allow messages from instructors',
            'Share activity in community feed'
          ].map((setting) => (
            <label key={setting} className="flex items-center justify-between">
              <span className="text-gray-700">{setting}</span>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Globe className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Zone
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <option>Pacific Time (PT)</option>
              <option>Mountain Time (MT)</option>
              <option>Central Time (CT)</option>
              <option>Eastern Time (ET)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Account */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Eye className="h-6 w-6 text-purple-600 mr-3" />
          <h2 className="text-lg font-semibold text-gray-900">Account</h2>
        </div>
        <div className="space-y-4">
          <button className="text-purple-600 hover:text-purple-700 font-medium">
            Change Password
          </button>
          <button className="text-red-600 hover:text-red-700 font-medium">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}