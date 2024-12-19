import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$29',
    description: 'Perfect for those just starting their fitness journey.',
    features: [
      'Access to gym facilities',
      '2 group classes per week',
      'Basic workout plans',
      'Locker room access',
      'Fitness assessment',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '$59',
    description: 'The perfect package for serious fitness enthusiasts.',
    features: [
      'Unlimited gym access',
      'Unlimited group classes',
      'Personalized workout plans',
      'Nutrition consultation',
      '1 personal training session/month',
      'Access to premium amenities',
      'Guest passes (2/month)',
    ],
    featured: true,
  },
  {
    name: 'Elite',
    id: 'tier-elite',
    href: '#',
    description: 'For those who want the ultimate fitness experience.',
    priceMonthly: '$99',
    features: [
      'Everything in Pro',
      '4 personal training sessions/month',
      'Monthly massage therapy',
      'Priority class booking',
      'Exclusive events access',
      'Partner gym access',
      'Customized nutrition plan',
    ],
    featured: false,
  },
]

export function Membership() {
  return (
    <div id="membership" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose your membership
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Find the perfect plan that fits your fitness goals and lifestyle.
          Join our community today and start your transformation journey.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.featured
                  ? 'bg-gray-900 text-white ring-gray-900'
                  : 'bg-white text-gray-900'
              } xl:p-10`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className={`text-lg font-semibold leading-8 ${
                  tier.featured ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{tier.priceMonthly}</span>
                <span className={`text-sm font-semibold leading-6 ${
                  tier.featured ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  /month
                </span>
              </p>
              <a
                href={tier.href}
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                    : 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                }`}
              >
                Get started today
              </a>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.featured ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tier.featured ? 'text-primary-400' : 'text-primary-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}