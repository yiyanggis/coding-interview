var express = require('express');
var router = express.Router();
var codeInterviewBundle = require('../src/res/code_interview')

router.get('/', function(req, res, next) {
  res.send('code interview questions');
});

router.get('/list', function(req, res, next) {
  
});

router.get('/test', function(req, res, next) {
	codeInterviewBundle.test()
  res.send('test');
});

module.exports = router;
