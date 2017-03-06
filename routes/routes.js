var express = require('express');
var router = express.Router();
router.route('/').get(function (req, res) {
    console.log(req);
    res.status(200).send('Szia');
}).post(function (req, res) {
    res.status(404).send('Noooo');
}).delete(function (req, res) {
    res.status(200).send('I dont know');
});
router.route('/').put(function (req, res) {
    res.status(400).send('why');
});
router.route('/address').post(function (req, res) {
    res.status(500).send('you failed');
});
module.exports = router;
