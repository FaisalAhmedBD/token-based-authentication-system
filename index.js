const express = require('express');
const app = express();
var path = require('path');
var { router } = require('./Route');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send('So far good');
})
app.use('/v1', router);
app.listen(3001, () => {
    console.log('app listening to port number 3001');
})