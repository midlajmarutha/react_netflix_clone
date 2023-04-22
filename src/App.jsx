import React from 'react'
import Navbar from './components/Navbar'
import '../src/App.css'
import Movieinfo from './components/Movieinfo'
import Slider from './components/Slider'

function App() {
  return (
    <div>
      <div className='Hero'>
        
        <div className='fade'>
          <Navbar/>
          <Movieinfo/>
          <Slider/>
        </div>
      </div>
      
    </div>
  )
}

export default App

