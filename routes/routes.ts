var express = require('express');
var router = express.Router();

router.route('/').get((req, res) => {
    console.log(req);
    res.status(200).send('Szia');
}).post((req, res) => {
    res.status(404).send('Noooo');
}).delete((req, res) => {
    res.status(200).send('I dont know');
});

router.route('/').put((req, res) => {
    res.status(400).send('why');
})

router.route('/address').post((req, res) => {
    res.status(500).send('you failed');
})

module.exports = router;