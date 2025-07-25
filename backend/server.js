const express = require('express');
const cors=require('cors');
const DBConnection = require('./Connection');
const dotenv=require('dotenv');
const PORT = process.env.PORT || 5000;

const app = express();


dotenv.config();

//Routes
const taskRoute=require('./Routes/taskRoute')

app.use(cors());
app.use(express.json());  //middleware used for server to get request data in json

DBConnection();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/task',taskRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});