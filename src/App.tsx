import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/Navbar';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';

function App() {
  const [showOnboarding, setShowOnboarding] = React.useState(false);

  const handleJoinClick = () => {
    setShowOnboarding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showOnboarding) {
    return <OnboardingFlow />;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar onJoinClick={handleJoinClick} />
          <AppRoutes onJoinClick={handleJoinClick} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;