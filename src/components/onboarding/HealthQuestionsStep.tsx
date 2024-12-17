import React from 'react';

interface HealthQuestionsFormData {
  fitnessLevel: string;
  medicalConditions: string;
  injuries: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

interface HealthQuestionsStepProps {
  onNext: (data: HealthQuestionsFormData) => void;
  onBack: () => void;
}

export function HealthQuestionsStep({ onNext, onBack }: HealthQuestionsStepProps) {
  const [formData, setFormData] = React.useState<HealthQuestionsFormData>({
    fitnessLevel: '',
    medicalConditions: '',
    injuries: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('emergency')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Health Information</h2>
      <p className="text-gray-600 mb-8">Help us provide you with the safest experience</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fitnessLevel" className="block text-sm font-medium text-gray-700 mb-1">
            Current Fitness Level
          </label>
          <select
            id="fitnessLevel"
            name="fitnessLevel"
            required
            value={formData.fitnessLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="">Select your fitness level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1">
            Medical Conditions
          </label>
          <textarea
            id="medicalConditions"
            name="medicalConditions"
            rows={3}
            placeholder="List any relevant medical conditions or write 'None'"
            value={formData.medicalConditions}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="injuries" className="block text-sm font-medium text-gray-700 mb-1">
            Current or Past Injuries
          </label>
          <textarea
            id="injuries"
            name="injuries"
            rows={3}
            placeholder="List any injuries or write 'None'"
            value={formData.injuries}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="emergency.name" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Name
              </label>
              <input
                type="text"
                id="emergency.name"
                name="emergency.name"
                required
                value={formData.emergencyContact.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="emergency.phone" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Phone
              </label>
              <input
                type="tel"
                id="emergency.phone"
                name="emergency.phone"
                required
                value={formData.emergencyContact.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="emergency.relationship" className="block text-sm font-medium text-gray-700 mb-1">
                Relationship
              </label>
              <input
                type="text"
                id="emergency.relationship"
                name="emergency.relationship"
                required
                value={formData.emergencyContact.relationship}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>
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
            className="flex-1 bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}