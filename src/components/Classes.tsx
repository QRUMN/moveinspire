import React from 'react'
import { Dumbbell, Users, Heart, Brain } from 'lucide-react'

const features = [
  {
    name: 'Strength Training',
    description: 'Build muscle, increase strength, and boost your metabolism with our expert-led strength training classes.',
    icon: Dumbbell,
  },
  {
    name: 'Group Fitness',
    description: 'Join our energetic group classes for motivation, accountability, and a fun workout experience.',
    icon: Users,
  },
  {
    name: 'Cardio & HIIT',
    description: 'Improve your endurance and burn calories with our high-intensity interval training sessions.',
    icon: Heart,
  },
  {
    name: 'Mind & Body',
    description: 'Find balance and reduce stress with our yoga, pilates, and mindfulness classes.',
    icon: Brain,
  },
]

export function Classes() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Expert Training</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Classes for Every Goal
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're just starting your fitness journey or looking to take it to the next level,
            we have the perfect class for you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-primary-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}