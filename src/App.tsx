import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Classes } from './components/Classes'
import { Membership } from './components/Membership'

function App() {
  const handleJoinClick = () => {
    const membershipSection = document.getElementById('membership')
    if (membershipSection) {
      membershipSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar onJoinClick={handleJoinClick} />
        <Hero onJoinClick={handleJoinClick} />
        <Classes />
        <Membership />
      </div>
    </BrowserRouter>
  )
}

export default App