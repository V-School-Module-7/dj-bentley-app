import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MixPlayer from './MixPlayer.jsx'
import About from './About.jsx'


function App() {


  return (
    <div>
      DJ Bentley V2 
      <MixPlayer />
      <About />       
    </div>
  )
}

export default App
