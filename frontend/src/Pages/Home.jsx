import React, { useState } from 'react'
import Task from '../Components/Task'
import Card from '../Components/Card'

function Home() {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <center className='bg-blue-950 text-2xl font-bold pt-5 text-blue-300' >Add Your Task</center>
      <hr className=' text-gray-400 shadow-2xl shadow-orange-300'/>
      <Task triggerRefresh={()=>setRefresh(prev=>!prev)} />
      <div className="card-container">
      <hr className=' text-gray-400'/>
      <Card refresh={refresh} setRefresh={setRefresh}/>
      </div>
    </>
  )
}

export default Home
