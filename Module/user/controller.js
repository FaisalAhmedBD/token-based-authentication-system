var { userModel } = require('./model');

var getAllUser = (req, res) => {
    return userModel.
        find({})
        .then(data => {
            res.status(200).send({ user: data });
        })
        .catch(error => {
            console.log('error while retrieving user info');
            res.send('error while retrieving user info');
        })
}
var getSingleUser = (req, res) => {
    return userModel.
        findById(req.params.id, (error, user) => {
            if (error)
                res.status(500).send('error while retriving single user from database');
            if (!user)
                res.status(404).send('user not found');
            res.status(200).send(user);
        })
}

// var registerNewUser = (req, res) => {
//     console.log('req body : ', req.body);
//     const { name, email, password } = req.body;
//     let newUser = new userModel({
//         name, email, password
//     })
//     newUser.save(error => {
//         if (error)
//             console.error(error);
//         console.log('user successfully registerd!');
//     })
//     res.send('user registration successful');
// }

module.exports = {
    getAllUser,
    getSingleUser,
    // registerNewUser,
    userModel 
}