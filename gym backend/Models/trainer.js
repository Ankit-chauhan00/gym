const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
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

trainerSchema.pre('save', async function (next) {
  if(!this.isModified('password')) return;

  this.password = await bcrypt.hash(this.password, 10);

});

module.exports = mongoose.model('Trainer', trainerSchema);
