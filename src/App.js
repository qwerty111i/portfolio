import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Resume />
      <Timeline />
      <Portfolio />
    </div>
  );
}

export default App;
