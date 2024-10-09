// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const jwtSecret = 'your_jwt_secret_key';
// Protect Middleware
const authenticate = (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(403).jon({status:"error",isAuth:false});
        try {
          const decoded = jwt.verify(token.split(' ')[1],jwtSecret);
          req.user = decoded;      
          next();
        } catch (err) {
          return res.status(401).json({status:"error",isAuth:false,message:"invalid jwt secret"});
        }

};

module.exports = { authenticate };
