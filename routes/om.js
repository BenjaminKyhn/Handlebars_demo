var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('om', { fornavn: "Benjamin", efternavn: "Kyhn", fødselsår: "1988", fødselsmåned: "april", fødselsdag: "15"});
});

module.exports = router;
