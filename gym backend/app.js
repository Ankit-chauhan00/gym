// express backend frame work used with node js
const express  = require('express');
//allow front end to talk with backend
const cors = require('cors');
// importing the mongoose 
const mongoose = require('mongoose');
// exercise router
const exerciseRouter = require('./Routes/exerciseRoutes');
const trainerRouter = require('./Routes/trainerRoutes');

require('dotenv').config();

const app = express();


//middlewhere
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routers
app.use('/api/exercises',exerciseRouter);
app.use('/api/trainer',trainerRouter);

const PORT = 3004;

mongoose.connect(process.env.DB_PATH).then(()=>{
 console.log('connected to mongoDB') 
app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`)
});
}).catch(err =>{
  console.log('Error while connecting mongoDb', err)
})