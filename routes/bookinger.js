var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.sendFile('/public/biler.json', { root: 'C:/Users/benky/Node/Handlebars' })
  res.render('bookinger', { title: 'Bookinger' });
});

module.exports = router;