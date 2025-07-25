import React, { useEffect, useState } from 'react'


function Update({task,id,triggerRefresh,triggerUpdate}) {
  const baseUrl="http://localhost:5000/task";

  const updateTask=task.filter(task=>task._id===id);

  const [data,setData]=useState({
      taskName:"",
      taskDesc:"",
      taskDue:""
    })

    useEffect(()=>{
      setData({
        taskName:updateTask[0].taskName,
        taskDesc:updateTask[0].taskDesc,
        taskDue:updateTask[0].taskDue?updateTask[0].taskDue:Date.now
      })
    },[]);

    const handleChange=(e)=>{
    const{name,value}=e.target;
    setData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch(`${baseUrl}/update`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({data:data,id:id})
    })
    .then((res)=>{
      console.log(res);
      if(res.ok)alert("Data Updated Successfully!!");
    })
    .catch(err=>console.log(err))
    triggerRefresh();
    triggerUpdate();
  }

  return (
    <>
      <form action="submit" onSubmit={handleSubmit} className='task-form flex flex-row gap-5 p-4 justify-center items-center flex-wrap'>
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
               defaultValue={data.taskDueDate?data.taskDue:""}
               name="taskDue"
               className='task-input p-3 rounded-lg
               shadow-lg transition duration-300 ease-in-out'
               onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    
    </>
  )
}

export default Update
