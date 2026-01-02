const Trainer = require("../Models/trainer")


// create Trainer
exports.addTrainer = (req, res)=>{
  const trainer  =  new Trainer(req.body);

  trainer.save().then(()=>{
    res.status(201).json({message : "trainer Added", trainer})
  })
  .catch(err=>{
    res.status(400).json({message : "Unable to crate the trainer"})
  })
}
// get all trainer
exports.getallTrainers = (req,res)=>{
  Trainer.find().then(trainers=>res.json({trainers}))
   .catch(err => res.status(500).json({error : err.message}))
}

// get single triner
exports.getTrainerById = (req,res)=>{
  Trainer.findById(req.params.id).then(trainer =>{
    if(!trainer)
      res.status(404).json({message: "Trainer not found"});
    else
      res.send(200).json({trainer});
  })
}

// delete trainer
exports.deleteTrainer = (req,res)=>{
  Trainer.findByIdAndDelete(req.params.id)
  .then(res.json({message: "trainer deleted"}))
  .catch(res.json({message: "nable to delete Trainer"}))
}