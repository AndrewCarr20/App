const jwt = require('jsonwebtoken');

// generate token for sharing security infromatino between server and client 

const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

module.export = generateToken