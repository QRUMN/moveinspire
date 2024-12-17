import React from 'react';
import { Check } from 'lucide-react';

interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

interface MembershipSelectionStepProps {
  onNext: (planId: string) => void;
  onBack: () => void;
}

const plans: MembershipPlan[] = [
  {
    id: 'annual',
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
    id: 'monthly',
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
    ]
  },
  {
    id: 'dropin',
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
    ]
  }
];

export function MembershipSelectionStep({ onNext, onBack }: MembershipSelectionStepProps) {
  const [selectedPlan, setSelectedPlan] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlan) {
      onNext(selectedPlan);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose your membership</h2>
      <p className="text-gray-600 mb-8">Select the plan that best fits your journey</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl p-6 transition cursor-pointer ${
                selectedPlan === plan.id
                  ? 'border-2 border-purple-600 bg-purple-50'
                  : 'border-2 border-gray-200 hover:border-purple-200'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  Recommended
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{plan.name}</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                    <span className="ml-2 text-gray-600">/{plan.period}</span>
                  </div>
                </div>
                {selectedPlan === plan.id && (
                  <Check className="h-6 w-6 text-purple-600" />
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-full hover:border-purple-600 transition"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!selectedPlan}
            className="flex-1 bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}