var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile('/public/biler.json', { root: 'C:/Users/benky/Node/Handlebars' })
});

module.exports = router;