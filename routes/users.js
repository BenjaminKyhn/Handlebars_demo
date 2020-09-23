var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let obj = {
    "id": "1337"
  };
  res.send(obj);
});

module.exports = router;