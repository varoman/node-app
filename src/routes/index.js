const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.send('app works!')
    });

module.exports = router;
