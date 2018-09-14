const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var { database } = require('../Configaration');
var { getAllUser, getSingleUser } = require('../Module/user');
var { registerNewUser, login } = require('../Module/auth');

router.get('/user-info', getAllUser);
router.get('/user-info:id', getSingleUser);
router.get('/me', login);
router.post('/register-user', registerNewUser);
module.exports = {
    router
}