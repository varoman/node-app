const mongoose = require('mongoose'),
      userModel = require('../models/user'),
      URI = 'mongodb://heroku_3s4t03px:gg9n3snrleb95rqf7t9mllpr4o@ds159651.mlab.com:59651/heroku_3s4t03px';

mongoose.connect(URI, { useNewUrlParser: true });

const getUsers = res => {
    userModel.find((err, users) => {
        if (err)
            res.status(503);
        else
            res.send(users);
    });
};

const getSingleUserById = (userId, res) => {
    userModel.findById(userId, (err, user) => {
        if (err)
            res.sendStatus(503);
        else if (!user)
            res.sendStatus(404);
        else
            res.send(user);
    });
};

const updateUser = (req, res) => {
    userModel.updateOne({_id: req.params.id}, req.body, (err, result) => {
        if (err)
            res.sendStatus(503);
        else if (!result.n)
            res.sendStatus(404);
        else
            res.sendStatus(200);
    });
};

const createUser = (user, res) => {
    const newUser = new userModel(user);
    newUser.save(newUser, (err, result) => {
        if (err) {
            if (err.name === 'ValidationError')
                res.status(400).end(err.message);
            else
                res.sendStatus(503);
        }
        else
            res.status(201).end(JSON.stringify(result));
    });
};

const dropUser = (userId, res) => {
    userModel.findByIdAndRemove(userId, (err, result) => {
        if (err)
            res.sendStatus(503);
        else if (!result)
            res.sendStatus(404);
        else
            res.sendStatus(204);
    });
};

module.exports = {
    getUsers,
    getSingleUserById,
    updateUser,
    createUser,
    dropUser
};