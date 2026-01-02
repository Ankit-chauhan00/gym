const Exercise = require("../Models/exercise");


// create Exercise
exports.addExercises = (req,res,next)=>{

const exercise = new Exercise(req.body);
  exercise.save().then(()=>{
    res.status(201).json({message: "exercise Saved", exercise})
  }).catch(err => {
      res.status(500).json({
        message: "Failed to save exercise",
        error: err.message,
      });
});
}

// Read Exercise
exports.getAllExercises = (req,res)=>{
  Exercise.find().then(exercise => res.json(exercise))
  .catch(err => res.status(500).json({error : err.message}))
};

// Read One exercise
exports.getExerciseById = (req,res)=>{
  Exercise.findById(req.params.id).then(exercise => {
    if(!exercise)
      return res.status(404).json({message: 'Exercise not found'});
    else
      res.json(exercise);
  }).catch(err =>res.status(400).json({error: err.message}))
};

//Update
exports.updateExercise = (req,res)=>{
  Exercise.findByIdAndUpdate(req.params.id, req.body,{new : true, runValidators: true})
  .then(updated => res.json(updated))
  .catch(err => res.status(400).json({error : err.message}));
}

// Delete
exports.deleteExercise = (req,res)=>{
  Exercise.findByIdAndDelete(req.params.id)
  .then(()=>res.json({message: 'Exercise Deleted'}))
  .catch(err => res.status(400).json({error : err.message}))
}

