const express = require('express');
const { addTrainer, getallTrainers, getTrainerById, deleteTrainer } = require('../Controllers/trainerController');
const trainerRouter = express.Router();

trainerRouter.post('/',addTrainer);
trainerRouter.get('/',getallTrainers);
trainerRouter.get('/:id',getTrainerById);
trainerRouter.delete('/:id',deleteTrainer)



module.exports = trainerRouter;