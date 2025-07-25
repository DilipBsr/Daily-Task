const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema(
  {
    taskName:{type:String,required:true},
    taskDesc:{type:String,default:"General Task"},
    taskDue:{type:Date}
  }
)

const Task=mongoose.model('task',taskSchema);

module.exports={Task};