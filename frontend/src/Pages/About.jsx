import React from 'react'
import cover from '../assets/AboutHero.png'
import crud from '../assets/CRUD.png'
import ex1 from '../assets/example.png'
import ex2 from '../assets/example1.png'



function About() {
  return (
    <>
      <h1 className='w-full bg-blue-950 text-2xl font-bold p-5 text-center text-gray-100'>About</h1>
      <div>
        <img className='w-full' src={cover} alt="img"/>
      </div>
      <div className='bg-blue-950 min-h-screen border-2 p-5 font-semibold text-gray-200 lg:text-3xl'>
        <center className='shadow-2xl shadow-amber-100'>Task Manager – Full Stack CRUD App</center>
        <hr/>
        <br />
        <div className='shadow-2xl m-2 shadow-amber-400'>
            <img src={crud} alt="" />
          <div className='grid grid-cols-2 mb-2 shadow-2xl shadow-blue-200'>
            <div className='p-4 lg:flex justify-center items-center  lg:p-8 lg:text-4xl text-justify'>
            A full-stack Task Manager built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to add, update, delete, and view tasks in real-time. It demonstrates end-to-end CRUD operations with a responsive and user-friendly interface.
          </div>
            <p className='flex items-center flex-col bg-white p-3 text-xl text-blue-900 gap-2'>
              Screenshots
            <img src={ex2} alt="" />
            </p>
          </div>
          <img src={ex1} alt="" />
</div>
      </div>
      
    </>
  )
}

export default About
