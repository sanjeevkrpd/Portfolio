import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'

import Skill from './Pages/Skill'
import About from './Pages/About'

function App() {


  return (
    <>
    <div className='mainDiv'>
    <header style={{  zIndex : 1}}>
      <Navbar/>
      </header>
  
    <div style={{backgroundColor : " #16185c"}}>
    <Home/>
    <About/>
     <Skill/>
    </div>
  
    </div>
    </>
  )
}

export default App
