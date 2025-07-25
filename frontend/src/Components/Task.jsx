import React, { useEffect, useState } from 'react'

function Task({triggerRefresh}) {
  const baseUrl="http://localhost:5000/task";
  const [data,setData]=useState({
    taskName:"",
    taskDesc:"",
    taskDue:""
  })
  
  const[update,setUpdate]=useState(0);

 

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit=async (e)=>{
    console.log(data);
    e.preventDefault();
    await fetch(`${baseUrl}/addData`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    })
    .then((res)=>{
      console.log(res);
      if(res.ok)alert('Data add sucessfully!!');
      setData({
        taskName:"",
        taskDesc:"",
        taskDue:""
      });
    })
    .catch(err=>console.log(err));
    triggerRefresh()
  };




  return (
    <>
      <form action="submit" onSubmit={handleSubmit} className='task-form flex flex-row gap-5 p-4 justify-center items-center flex-wrap '>
        <input type="text"
               name="taskName"
              value={data.taskName}
               placeholder="Enter your task"
              required
              className='task-input p-3 rounded-lg
              shadow-lg transition duration-300 ease-in-out'
              onChange={handleChange}
        />
        <input type="text"
               name="taskDesc"
               value={data.taskDesc}
               placeholder="Enter task description"
               required
               className='task-input p-3 rounded-lg
               shadow-lg transition duration-300 ease-in-out'
               onChange={handleChange}
        />
        <input type="date"
               name="taskDue"
               value={data.taskDue}
               className='task-input p-3 rounded-lg
               shadow-lg transition duration-300 ease-in-out'
               onChange={handleChange}
        />
        <button type="submit">Add New</button>
      </form>
      
    </>
  )
}

export default Task
