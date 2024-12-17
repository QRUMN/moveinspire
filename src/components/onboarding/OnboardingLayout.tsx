import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  showBack?: boolean;
}

export function OnboardingLayout({ 
  children, 
  currentStep, 
  totalSteps, 
  onBack,
  showBack = true 
}: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 mb-8 hover:text-purple-600 transition"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
        )}
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </div>
              <div className="flex gap-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-8 rounded-full ${
                      index < currentStep ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}