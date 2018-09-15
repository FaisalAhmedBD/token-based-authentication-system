var jwt = require('jsonwebtoken');
var { secretKey } = require('./config');

var verifyToken = (req, res, next) => {
    console.log('middleware')
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(401).send({ auth: false, message: 'no token provided' });
    jwt.verify(token, secretKey.secret, (error, decoded) => {
        if (error)
            return res.status(500).send({ auth: false, message: 'failed to authenticate the token' });
        req.userId = decoded.id;
        next();
    })
}
module.exports = {
    verifyToken
}