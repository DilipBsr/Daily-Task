const express=require('express');
const {addTask,updateTask,deleteTask, getAllData}=require('../Controller/taskController')
const router=express.Router();

router.post('/addData',addTask);
router.put('/update',updateTask);
router.delete('/delete',deleteTask);
router.get('/getData',getAllData);

module.exports=router;
