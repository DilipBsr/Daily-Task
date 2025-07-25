import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-Dolist.png'

function Navbar() {
  const [flag,setFlag]=useState(false);
  const navigate=useNavigate();
  return (
    <>
      <div className='flex justify-around shadow-xl w-full h-20 items-center px-10 text-blue-400'>
       <div className='font-bold text-2xl cursor-pointer'>
        <div className='w-30 shadow-2xs shadow-blue-400'onClick={()=>(navigate('/'),setFlag(false))}>
         <img  className="object-fill rounded-2xl" src={logo}/>
        </div>
        </div>
       <div className='flex gap-5 bg-gray-100 p-3 rounded-2xl text-2xl shadow-2xs shadow-blue-200'>
        {
          flag?
          <NavLink to="/" onClick={({isActive})=>{
            isActive?setFlag(true):setFlag(false);
          }} >Home</NavLink>:
          <NavLink to="/about" onClick={({isActive})=>{
            isActive?setFlag(false):setFlag(true);
          }} >About</NavLink>
        }
      </div>
    </div>
    </>
  )
}

export default Navbar
