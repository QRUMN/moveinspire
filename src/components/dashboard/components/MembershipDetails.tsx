import React from 'react';
import { Calendar, CreditCard, Gift, Settings } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { BackButton } from '../../common/BackButton';

export function MembershipDetails() {
  const { user } = useAuth();

  const membershipFeatures = [
    {
      icon: Calendar,
      title: 'Unlimited Classes',
      description: 'Access to all regular classes and workshops'
    },
    {
      icon: Gift,
      title: 'Member Perks',
      description: '15% off merchandise and special events'
    },
    {
      icon: Settings,
      title: 'Flexible Scheduling',
      description: 'Book classes up to 2 weeks in advance'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <BackButton to="/dashboard" label="Back to Dashboard" />
        <h1 className="text-2xl font-bold text-gray-900">Membership Details</h1>
      </div>

      {/* Current Plan */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Current Plan</h2>
            <p className="text-purple-600 font-medium">{user?.membershipType}</p>
          </div>
          <CreditCard className="h-8 w-8 text-purple-600" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {membershipFeatures.map((feature, index) => (
            <div key={index} className="p-4 bg-purple-50 rounded-lg">
              <feature.icon className="h-6 w-6 text-purple-600 mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Next billing date</p>
              <p className="font-medium text-gray-900">March 1, 2024</p>
            </div>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Manage Billing
            </button>
          </div>
        </div>
      </div>

      {/* Membership History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Membership History</h2>
        <div className="space-y-4">
          {[
            { date: 'Feb 1, 2024', amount: '$199.00', status: 'Paid' },
            { date: 'Jan 1, 2024', amount: '$199.00', status: 'Paid' },
            { date: 'Dec 1, 2023', amount: '$199.00', status: 'Paid' }
          ].map((payment, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-gray-900">{payment.date}</p>
                <p className="text-sm text-gray-600">Monthly Subscription</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{payment.amount}</p>
                <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}