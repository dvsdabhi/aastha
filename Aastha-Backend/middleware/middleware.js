const jwt = require("jsonwebtoken");
const {getUser} = require('../services/auth');

// Generate JWT token using userId and role
const generateToken = (userId) => {
  try {
    const payload = { userId };
    const token = jwt.sign(payload, 'divyeshdabhi', {
      expiresIn: "48h",
    });
    console.log("Token generated successfully:", token);
    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw error; // Rethrow the error for the calling code to handle
  }
};
  
// get userId from token
const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, 'divyeshdabhi');
    return decodedToken.userId;
  } catch (error) {
    console.log("token error", error);
  }
};

const validUser = async ( req, res, next ) => {
  const userId = req.cookies.uid;

  if(!userId) return res.status(200).send({message:"user not login"});
  const user = getUser(userId);
  if(!user) return res.status(200).send({message:""});
}
  
module.exports = { generateToken, getUserIdFromToken };