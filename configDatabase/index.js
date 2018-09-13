var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userInfo');
var database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error'));
database.once('open', () => {
    console.log('database successfully connected');
});

module.exports = {
    database
}