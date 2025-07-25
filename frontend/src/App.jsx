import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Routing from './Routing'


function App() {  
  
  return (
    <>
        <Navbar/>
        <Routing/>
    </>
  )
}

export default App
