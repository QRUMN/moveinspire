```tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Heart, Users, Star, ArrowRight } from 'lucide-react';
import { Container } from './layout/Container';

interface HeroProps {
  onJoinClick: () => void;
}

export function Hero({ onJoinClick }: HeroProps) {
  const navigate = useNavigate();

  const handleExploreClasses = () => {
    navigate('/classes');
  };

  return (
    <div className="pt-32 pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Box */}
          <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Life Through Movement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our supportive community of women discovering strength, confidence, and joy through dance and movement therapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onJoinClick}
                  className="flex items-center justify-center bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleExploreClasses}
                  className="flex items-center justify-center border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-50 transition"
                >
                  Explore Classes
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Community Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-[1.02] transition-all duration-300">
              <Users className="h-8 w-8 text-purple-600 mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">250+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </div>

            {/* Classes Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-[1.02] transition-all duration-300">
              <Sparkles className="h-8 w-8 text-purple-600 mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Weekly Classes</div>
            </div>

            {/* Success Stories Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-[1.02] transition-all duration-300">
              <Heart className="h-8 w-8 text-purple-600 mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>

            {/* Rating Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-[1.02] transition-all duration-300">
              <Star className="h-8 w-8 text-purple-600 mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Member Rating</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: 'Expert Instructors',
              description: 'Learn from certified professionals with years of experience',
              icon: Star
            },
            {
              title: 'Flexible Schedule',
              description: 'Choose from multiple class times that fit your lifestyle',
              icon: Users
            },
            {
              title: 'Supportive Community',
              description: 'Connect with like-minded women on similar journeys',
              icon: Heart
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-[1.02] transition-all duration-300"
            >
              <feature.icon className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
```