var { mongoose, userSchema } = require('./schema');
var userModel = mongoose.model('user', userSchema);
module.exports = {
    userModel
}