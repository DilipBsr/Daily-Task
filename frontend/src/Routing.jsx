import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'

function Routing() {
 

  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
    
  )
}

export default Routing
