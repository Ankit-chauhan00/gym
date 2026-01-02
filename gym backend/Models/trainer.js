const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema(
  {
    trainerName: {
      type: String,
      required: true,
      trim: true
    },
    contact: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String, // 🔥 must be string (hashed)
      required: true
    },
    role: {
      type: String,
      default: 'trainer'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Trainer', trainerSchema);
