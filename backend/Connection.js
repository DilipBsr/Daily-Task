const mongoose=require('mongoose')

const Connection = async () => {
  try{
    await mongoose.connect('mongodb://localhost:27017/MyTask')
    console.log('MongoDB Connected Successfully !!')
  }catch(err){
    console.log(err);
  }
};
module.exports = Connection;
