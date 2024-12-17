import React from 'react';
import { Check } from 'lucide-react';

interface MembershipProps {
  onJoinClick: () => void;
}

const plans = [
  {
    name: 'Annual Membership',
    price: '799',
    period: 'quarter',
    features: [
      'Unlimited class access',
      'Quarterly wellness assessments',
      'Personal coaching sessions (2/quarter)',
      'Priority booking for events',
      '15% merchandise discount',
      '12-month commitment'
    ],
    highlighted: true
  },
  {
    name: 'Monthly Subscription',
    price: '199',
    period: 'month',
    features: [
      'Unlimited class access',
      'Monthly wellness check-ins',
      '10% merchandise discount',
      'Flexible monthly renewal',
      'Basic class booking',
      'Community access'
    ],
    highlighted: false
  },
  {
    name: 'Drop-in Classes',
    price: '30',
    period: 'class',
    features: [
      'Pay-per-class flexibility',
      'No commitment required',
      '5% merchandise discount',
      'Basic class booking',
      'Community access',
      'Class recordings (24h)'
    ],
    highlighted: false
  }
];

export function Membership({ onJoinClick }: MembershipProps) {
  return (
    <section id="membership" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
          <p className="text-xl text-gray-600">Flexible membership options designed for your journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-purple-600 text-white ring-4 ring-purple-600 ring-offset-2'
                  : 'bg-white text-gray-900'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="ml-2 text-lg">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onJoinClick}
                className={`w-full py-3 px-6 rounded-full text-lg font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}