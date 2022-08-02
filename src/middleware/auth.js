const jwt = require("jsonwebtoken");

function verifyToken (req, res, next) {
  
  const token = req.headers['x-access-token'];

  if(!token) {
    
    return res.status(403).json("Token é necessário para autenticação.")
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.identify = decoded.id;

  } catch (err) {
    return res.status(401).json("Token Inválido")
  }

  return next();
};

module.exports = verifyToken;