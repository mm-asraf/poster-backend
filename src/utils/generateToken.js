const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: "1hr" });
  };

  
  module.exports = generateToken;