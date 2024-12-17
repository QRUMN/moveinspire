import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/Navbar';

function App() {
  const handleJoinClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar onJoinClick={handleJoinClick} />
        <AppRoutes onJoinClick={handleJoinClick} />
      </div>
    </BrowserRouter>
  );
}

export default App;