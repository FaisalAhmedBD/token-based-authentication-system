const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var { database } = require('../Configaration');
var { getAllUser, getSingleUser } = require('../Module/user');
var { registerNewUser, me, login, logout,  verifyToken } = require('../Module/auth');

router.get('/user-info', getAllUser);
router.get('/user-info:id', getSingleUser);
router.use('/me', verifyToken);
router.get('/me', me);
// router.use(customMiddleware);
router.get('/logout', logout);

router.post('/register-user', registerNewUser);
router.post('/login', login);

module.exports = {
    router
}