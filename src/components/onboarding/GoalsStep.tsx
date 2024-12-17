import React from 'react';
import { Check } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
}

interface GoalsStepProps {
  onNext: (selectedGoals: string[]) => void;
  onBack: () => void;
}

const goals: Goal[] = [
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

export function GoalsStep({ onNext, onBack }: GoalsStepProps) {
  const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(selectedGoals);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">What brings you here?</h2>
      <p className="text-gray-600 mb-8">Select all that apply to customize your journey</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <button
              key={goal.id}
              type="button"
              onClick={() => toggleGoal(goal.id)}
              className={`p-6 rounded-xl border-2 text-left transition ${
                selectedGoals.includes(goal.id)
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-200'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                {selectedGoals.includes(goal.id) && (
                  <Check className="h-5 w-5 text-purple-600" />
                )}
              </div>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </button>
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
            disabled={selectedGoals.length === 0}
            className="flex-1 bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}