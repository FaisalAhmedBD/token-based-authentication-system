const mongoose = require('mongoose');
const schema = mongoose.Schema;

var userSchema = new schema({
    name: String,
    email: String,
    password: String
})
module.exports = {
    mongoose,
    userSchema
}
