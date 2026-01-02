const mongoose = require('mongoose');


// exercise schema
const exerciseSchema = new mongoose.Schema(
  {
    exerciseName:{
      type: String,
      required: true,
      trim: true, // means remove the white spaces only from satrt and end not from the middle
    },
     muscleGroup: {
      type: String,
      required: true
    },
    equipment:{
      type: String,
    },
    sets:{
      type: Number,
      default : 3,
    },
     reps: {
      type: Number,
      default: 12
    },
     restTime: {
      type: Number, // seconds
      default: 60
    },
     description: {
      type: String
    },

  },
  {timestamps: true}
);

module.exports = mongoose.model('Exercise', exerciseSchema);