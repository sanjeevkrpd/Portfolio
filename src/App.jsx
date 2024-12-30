import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skill from './Pages/Skill'

function App() {


  return (
    <>
      <Navbar/>
     <body style={{backgroundColor : "#16185c" , minHeight : "100vh"}}>
     <Home/>
   
     <Skill/>
     </body>
    </>
  )
}

export default App
