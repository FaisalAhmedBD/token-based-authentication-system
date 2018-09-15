var { registerNewUser, me, login, logout, customMiddleware } = require('./contoller');
var { verifyToken } = require('./verifyToken');
module.exports = {
    registerNewUser,
    me,
    login,
    logout,
    verifyToken,
    customMiddleware
}