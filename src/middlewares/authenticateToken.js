const jwt = require('jsonwebtoken');

function authenticationToken(req, res, next) { 
    const authHeader = req.headers['authorization'];

    // Check if Authorization header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or improperly formatted' });
    }

    // Extract the token from the header
    const token = authHeader.split(' ')[1];

    // Check if token is null or undefined
    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
    }

    // Verify the token
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }

        // Attach user to the request object
        req.user = user;
        next();
    });
}

module.exports = authenticationToken;
