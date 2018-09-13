var { userModel } = require('./model');

var getUserInfo = (req, res) => {
    return userModel.
        find({})
        .then(data => {
            user: data
        })
        .catch(error => {
            console.log('error while retrieving user info');
            res.send('error while retrieving user info');
        })
}

var registerNewUser = (req, res) => {
    const { name, email, password } = req.body;
    let newUser = new userModel({
        name, email, password
    })
    newUser.save(error => {
        if (error)
            console.error(error);
        console.log('user successfully registerd!');
    })
    res.send('user registration successful');
}

module.exports = {
    getUserInfo,
    registerNewUser
}