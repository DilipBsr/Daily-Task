const express =require('express');
const {Task} =require('../Model/task.model')


const addTask=(req,res)=>{
  const body=req.body;
  console.log(body);
  if(!body.taskName || !body.taskDesc){
    return res.status(400).json({
      message:"Task or Desc is Empty!!",
      success:false
    })
  };
  const newUser=new Task(body);
  newUser.save();
  return res.status(200).json({
    message:"Data Inserted Successfully!!",
    _id:newUser.id,
    success:true
  })
};

const updateTask=async(req,res)=>{
  const body=req.body;
  console.log(body.id);
  if(!body){
    return res.status(400).json({
      message:"Provide Update Data!!",
      success:false
    })
  }
  try{
    const taskId=body.id;
    await Task.findByIdAndUpdate(
      taskId,
      {
        taskName:body.data.taskName,
        taskDesc:body.data.taskDesc,
        taskDue:body.data.taskDue
      },
      {
        new:true
      }
    );
    res.status(200).json({message:"Data Updated Successfully!!",newData:await Task.findById(taskId)})
  }catch(err){
    res.status(400).json({error:err})
  }
}


const deleteTask=async(req,res)=>{
  const taskId=req.body.id;
  if(!taskId)return  res.status(400).json({error:err})
  try{
    const item=await Task.findByIdAndDelete(taskId);
    if(!item)return res.json({message:"Data Already Deleted Not found in Database!!"})
    res.status(200).json({message:'Data Deleted Successfully!!' ,success:true ,deletedItem:item})
  }catch(err){
    console.log(err);
    res.status(400).json(
      {error:err}
    )
  }
}

const getAllData=async(req,res)=>{
  try{
    const data=await Task.find();
    const message=data.length===0 ? "No Data found!!":"Data Fetch Successfully!!"
    return res.status(200).json({
      body:data,
      success:true,
      message:message
    })
  }catch(err){
    return res.status(500).json({error:err,success:false});
  }
}


module.exports={addTask,updateTask,deleteTask,getAllData}; 