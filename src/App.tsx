import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
  const handleJoinClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar onJoinClick={handleJoinClick} />
        <Hero onJoinClick={handleJoinClick} />
      </div>
    </BrowserRouter>
  )
}

export default App