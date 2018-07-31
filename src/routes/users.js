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
        db_api.updateUser(req, res);
    })
    .post((req, res) => {
        db_api.createUser(req.body, res);
        zendesk.createZendeskUser(req.body);
    })
    .delete((req, res) => {
        db_api.dropUser(req.params.id, res);
    });

module.exports = router;