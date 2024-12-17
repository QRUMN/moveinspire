import React from 'react';
import { Check } from 'lucide-react';

interface ConfirmationStepProps {
  onComplete: () => void;
  onBack: () => void;
  membershipType: string;
}

export function ConfirmationStep({ onComplete, onBack, membershipType }: ConfirmationStepProps) {
  const [agreed, setAgreed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      onComplete();
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
          <Check className="h-8 w-8 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Almost there!</h2>
        <p className="text-gray-600">Review and confirm your membership details</p>
      </div>

      <div className="bg-purple-50 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Selected Plan: {membershipType}</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
            <span className="text-gray-600">Your profile and preferences have been saved</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
            <span className="text-gray-600">Health information recorded for safety</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
            <span className="text-gray-600">Emergency contact details stored</span>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className="ml-3 text-sm text-gray-600">
              I agree to the Terms of Service, Privacy Policy, and understand the cancellation policy
              for my selected membership plan.
            </span>
          </label>
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
            disabled={!agreed}
            className="flex-1 bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Registration
          </button>
        </div>
      </form>
    </div>
  );
}