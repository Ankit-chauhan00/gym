const bcrypt = require('bcryptjs');
const Trainer = require('../Models/trainer');
const jwt = require('jsonwebtoken')

// Login Trainer
exports.loginTrainer = async (req,res)=>{
  try {
    const {username, password} = req.body;

    // check input
    if(!username || !password){
      return res.status(400).json({success: false, message: "username and password are required"});
    }

    // find trainer
    const trainer = await Trainer.findOne({username});

    // is trainer is null or undefined
    if(!trainer){
      return res.status(404).json({message: "Trainer not Found",success: false })
    }
    // if we got the trainer we match the password
    const isMatch = await bcrypt.compare(password, trainer.password);

    if(!isMatch){
      return res.json({success: false, message: "Invalid Credentials"});
    }

    // create jwt token
    const token = jwt.sign(
      {
        id: trainer._id,
        role: trainer.role
      },
      process.env.JWT_SECRET,
      {expiresIn:"1d" }
    )


    // if passwords match 
    return res.status(200).json({success: true, message: "Login Successful", trainer: { 
      id: trainer._id,
      token,
      trainerName: trainer.trainerName,
      username: trainer.username,
      role: trainer.role
     }})

  } catch (error) {
    res.status(500).json({success: false, message: error.message})

  }
}