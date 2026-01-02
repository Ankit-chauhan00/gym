const jwt = require('jsonwebtoken');


const authMiddlewere = (req, res, next)=>{
  const authHeader = req.header('Authorization');


  if(!authHeader){
    return res.status(401).json({success: false, message: "access denied. No token provided"})
  }
  try {
    const token = authHeader.split(' ')[1]; // here 1 refers to the word after the first white space
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token
    
    req.user = decoded; // attach user info so every middleware after this can use this request
    next(); // allow request
  } catch (error) {
    res.status(401).json({
    success: false,
    message: "Invalid or expired token"
  });
  }
}

module.exports = authMiddlewere;