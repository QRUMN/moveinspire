import React from 'react'
import { ArrowRight, PlayCircle } from 'lucide-react'

interface HeroProps {
  onJoinClick: () => void
}

export function Hero({ onJoinClick }: HeroProps) {
  return (
    <div className="relative pt-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="relative z-10">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="mt-24">
                <a
                  href="#"
                  className="inline-flex space-x-4"
                >
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/20">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-1 text-sm font-medium leading-6 text-gray-600">
                    <span>Just launched February 2024</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Transform Your Life with{' '}
                  <span className="text-primary-600">Move Inspire</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Join our vibrant fitness community and experience expert-led classes, personalized training, 
                  and a supportive environment that will help you achieve your fitness goals.
                </p>
                <div className="mt-10 flex items-center gap-x-6 sm:justify-center lg:justify-start">
                  <button
                    onClick={onJoinClick}
                    className="rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200"
                  >
                    Start Your Journey
                  </button>
                  <button className="group flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900">
                    <PlayCircle className="h-5 w-5 text-gray-500 group-hover:text-gray-900 transition-colors duration-200" />
                    Watch video
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="relative">
                <div className="absolute -top-10 -right-10 bg-primary-500/10 w-72 h-72 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 bg-primary-500/10 w-72 h-72 rounded-full blur-3xl" />
                <img
                  src="/hero-image.jpg"
                  alt="Fitness training"
                  className="relative rounded-2xl shadow-xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}