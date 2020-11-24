var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('code interview questions');
});

router.get('/list', function(req, res, next) {
  
});

module.exports = router;
