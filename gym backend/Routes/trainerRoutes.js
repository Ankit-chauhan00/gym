const express = require('express');
const { addTrainer, getallTrainers, getTrainerById, deleteTrainer, updateTrainer } = require('../Controllers/trainerController');
const { loginTrainer } = require('../Controllers/logincontroller');
const authMiddlewere = require('../middlewere/authMiddlewere');
const trainerRouter = express.Router();



// checking if the trainer is logged in 
trainerRouter.post('/login',loginTrainer)
// create trainer
trainerRouter.post('/',addTrainer);
//get all trainers
trainerRouter.get('/',authMiddlewere,getallTrainers);
// get a particular trainer
trainerRouter.get('/:id',authMiddlewere,getTrainerById);
// deleter a trainer
trainerRouter.delete('/:id',authMiddlewere,deleteTrainer);
// update a trainer
trainerRouter.put('/:id',authMiddlewere,updateTrainer)



module.exports = trainerRouter;