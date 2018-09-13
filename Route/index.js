const express = require('express');
var router = express.Router();
require('../configDatabase');
var { getUserInfo, registerNewUser } = require('../Module/user');
router.get('/user-info', getUserInfo);
module.exports = {
    router
}