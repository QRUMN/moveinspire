import { Goal, MembershipPlan } from './types';

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
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

export const GOALS: Goal[] = [
  {
    id: 'fitness',
    title: 'Improve Fitness',
    description: 'Build strength, flexibility, and endurance through movement'
  },
  {
    id: 'stress',
    title: 'Reduce Stress',
    description: 'Find peace and balance through mindful movement practices'
  },
  {
    id: 'confidence',
    title: 'Build Confidence',
    description: 'Develop self-expression and body positivity'
  },
  {
    id: 'community',
    title: 'Join Community',
    description: 'Connect with like-minded women on similar journeys'
  }
];