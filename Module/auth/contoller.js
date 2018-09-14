var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var { userModel } = require('../user');
var { secretKey } = require('./config');

var registerNewUser = (req, res) => {
    const { name, email, password } = req.body;
    let hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = new userModel({
        name, email, hashedPassword
    });
    newUser.save((error, user) => {
        if (error) {
            console.error(error);
            res.status(500).send('error registering new user');
        }
        var token = jwt.sign({ id: user._id }, secretKey.secret, {
            expiresIn: 86400
        });

        res.status(200).send({ auth: true, token: token, message: 'New user successfully registered' });

    })
}

var login = (req, res) => {
    const token = req.headers['x-access-token'];
    
    if (!token)
        return res.status(401).send({ auth: false, message: 'no token provided' });
    jwt.verify(token, secretKey.secret, (error, decoded) => {
        if (error)
            res.status(500).send({ auth: false, message: 'Failed to authenticate token' });

        res.status(200).send(decoded);
    })

}
module.exports = {
    registerNewUser,
    login
}