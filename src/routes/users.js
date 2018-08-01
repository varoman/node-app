const router = require('express').Router(),
      bodyParser = require('body-parser'),
      db_api = require('../db/'),
      zendesk = require('../zendesk_api');

router.use(bodyParser.json());

router.route('/:id?')
    .get((req, res) => {
        if (req.params.id)
            db_api.getSingleUserById(req.params.id, res);
        else
            db_api.getUsers(res);
    })
    .put((req, res) => {
        if (!req.params.id) res.sendStatus(400);
        db_api.updateUser(req, res).then(user => {
            zendesk.updateUser(user);
            res.sendStatus(200);
        });
    })
    .post((req, res) => {
        zendesk.createZendeskUser(req.body)
            .then((zendeskUser) => {
                const user = req.body;
                user.zendesk_id = zendeskUser.user.id;
                db_api.createUser(user, res);
            })
            .catch(err => {
                res.status(400).end(err.message);
            });
    })
    .delete((req, res) => {
        db_api.dropUser(req.params.id, res);
    });

module.exports = router;