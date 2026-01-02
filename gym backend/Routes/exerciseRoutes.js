const express = require('express');
const { addExercises, getAllExercises, getExerciseById, deleteExercise, updateExercise } = require('../Controllers/exerciseController');
const exerciseRouter = express.Router();


// Create exercise
exerciseRouter.post('/',addExercises);
// get all exercise
exerciseRouter.get('/',getAllExercises);
// get single exercise by ID
exerciseRouter.get('/:id', getExerciseById);
// delete exercise 
exerciseRouter.delete('/:id',deleteExercise);
//update exercise
exerciseRouter.put('/:id',updateExercise);
module.exports = exerciseRouter;