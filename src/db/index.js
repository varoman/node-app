const mongoose = require('mongoose'),
      userModel = require('../models/user'),
      URI = 'mongodb://heroku_2x06vmh4:6g34nm879i6r0q6e2ave2kpkod@ds261430.mlab.com:61430/heroku_2x06vmh4',
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