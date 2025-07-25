import React, { useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators';
import Update from './Update';

function Card({ refresh, setRefresh }) {

  const baseUrl = "http://localhost:5000/task"
  const [updateId, setUpdateId] = useState("");
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [task, setTasks] = useState([]);


  const handleDelete = (e) => {
    console.log(e.target.value);
    fetch(`${baseUrl}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: e.target.value })
    })
      .then(res => {
        if (res.ok) alert('Data Deleted Successfully!!');
      })
      .catch(err => console.log(err));
    setRefresh(prev => !prev)
  }



  useEffect(() => {
    fetch(`${baseUrl}/getData`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
      .then((data) => {
        // console.log(data.body);
        setTasks(data.body);
        setLoading(false);
        console.log('callback');
      }).catch(err => console.log(err))
  }, [refresh])

  const handleUpdate = (e) => {
    console.log(e.target.value);
    setUpdateId(e.target.value);
    setUpdate(true);
  }

  return (
    <>
      <div className='flex  item-center gap-5 justify-around p-5 shadow-lg rounded-lg bg-white'>
        {
          loading ? <center><h1 className='text-2xl font-bold text-blue-800'>Fetching Data<ThreeDot variant="bounce" color="#401cdd" size="small" /></h1></center> : task.length === 0 ? <center><h1 className='text-2xl font-bold text-blue-800'>No Data Found !!</h1></center> :
            <table className='w-full '>
              <thead className='bg-blue-500 text-white h-10 grid-cols-4'>
                <tr>
                  <th className='w-2/12' >Task Title</th>
                  <th >Description</th>
                  <th className='w-2/12'>Due Date</th>
                  <th className='w-2/12'>Actions</th>
                </tr>
              </thead>
              <tbody className='w-full text-center justify-center items-center '>
                {
                  task
                    .slice()
                    .sort((a, b) => new Date(a.taskDue) - new Date(b.taskDue))
                    .map((task) => (
                      <tr key={task._id} className='shadow-lg grid-cols-4'>
                        <td className='w-2/12'>{task.taskName}</td>
                        <td>{task.taskDesc}</td>
                        <td className='w-fit min-w-22 '>{task.taskDue ? new Date(task.taskDue).toISOString().split('T')[0] : "No Due Date"}</td>
                        <td className='w-2/12'>
                          <button value={task._id} onClick={(e) => handleUpdate(e)}>Edit</button>
                          <button value={task._id} onClick={(e) => handleDelete(e)}>Delete</button>
                        </td>
                      </tr>
                    ))
                }
              </tbody>

            </table>
        }
      </div>
      {
        update && <Update task={task} id={updateId} triggerRefresh={() => setRefresh(prev => !prev)} triggerUpdate={() => setUpdate(false)} />
      }

    </>
  )
}

export default Card
