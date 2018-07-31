const mongoose = require('mongoose'),
      userModel = require('../models/user'),
      URI = 'mongodb://heroku_3s4t03px:gg9n3snrleb95rqf7t9mllpr4o@ds159651.mlab.com:59651/heroku_3s4t03px',
      db = mongoose.connect(URI, { useNewUrlParser: true });


const getUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find((err, users) => {
            if (err)
                reject(err);
            else
                resolve(users);
        });
    });
};

const getSingleUserById = userId => {
    return new Promise((resolve, reject) => {
        userModel.findById(userId, (err, user) => {
            if (err)
                reject(err);
            else if (!user)
                resolve(null);
            else
                resolve(user);
        });
    });
};

const updateUser = (userId, editedUser) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne({_id: userId}, editedUser, (err, result) => {
            if (err)
                reject(err);
            else if (!result.n)
                resolve(null);
            else
                resolve(result);
        });
    })
};

const createUser = user => {
    const newUser = new userModel(user);
    return new Promise((resolve, reject) => {
        newUser.save(newUser, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};

const dropUser = userId => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndRemove(userId, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};

module.exports = {
    db,
    getUsers,
    getSingleUserById,
    updateUser,
    createUser,
    dropUser
};