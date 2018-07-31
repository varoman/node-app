const router = require('express').Router(),
      bodyParser = require('body-parser');
      db_api = require('../db/');

router.use(bodyParser.json());

router.route('/:id?')
    .get((req, res) => {
        if (req.params.id)
            getSingleUser(res, req.params.id);
        else
            getUsers(res);
    })
    .put((req, res) => {
        updateUser(req, res);
    })
    .post((req, res) => {
        createUser(res, req.body);
    })
    .delete((req, res) => {
        deleteUser(req.params.id, res);
    });


const getUsers = (res) =>{
    db_api.getUsers()
        .then((users) => {
            res.send(users);
        })
        .catch(() => {
            res.status(503);
        });
};

const getSingleUser = (res, userId) => {
    db_api.getSingleUserById(userId)
        .then((user) => {
            if (user)
                res.send(user);
            else
                res.sendStatus(404);
        })
        .catch(() => {
            res.sendStatus(404);
        });
};

const updateUser = (req, res) => {
    db_api.updateUser(req.params.id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(() => {
            res.sendStatus(404);
        });
};

const createUser = (res, user) => {
    db_api.createUser(user)
        .then((newUser) => {
            res.status(201).end(JSON.stringify(newUser));
        })
        .catch((err) => {
            if (err.name === 'ValidationError')
                res.status(400).end(err.message);
            else
                res.sendStatus(503);
        });
};

const deleteUser = (userId, res) => {
    db_api.dropUser(userId)
        .then(() => {
            res.sendStatus(204);
        })
        .catch(() => {
            res.sendStatus(404);
        });
};


module.exports = router;