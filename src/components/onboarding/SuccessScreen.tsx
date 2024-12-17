import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PartyPopper, Calendar, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SuccessScreenProps {
  membershipType: string;
  firstName: string;
}

export function SuccessScreen({ membershipType, firstName }: SuccessScreenProps) {
  const navigate = useNavigate();
  const { login } = useAuth();

  React.useEffect(() => {
    // Simulate user login after successful registration
    login({
      firstName,
      membershipType,
      // Add other user data as needed
    });
  }, []);

  const handleBookClass = () => {
    navigate('/book-class');
  };

  const handleViewDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-purple-600 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 mb-6">
            <PartyPopper className="h-10 w-10 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Move & Inspire, {firstName}!
          </h1>
          <p className="text-lg text-gray-600">
            Your {membershipType} membership is now active
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-purple-50 rounded-lg p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Next Steps</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Book Your First Class</p>
                  <p className="text-gray-600">Get started with a class that matches your goals</p>
                </div>
              </li>
              <li className="flex items-start">
                <Calendar className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Complete Your Profile</p>
                  <p className="text-gray-600">Add a photo and customize your preferences</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleBookClass}
            className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition flex items-center justify-center"
          >
            Book Your First Class
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={handleViewDashboard}
            className="flex-1 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition"
          >
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}