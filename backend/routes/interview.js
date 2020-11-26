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

router.get('/question/:questionId', function(req, res, next){
	if(questionId != 1){
		res.send({"error":"no data"});
	}
	var data = {
		question: "implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?"
	}
	res.send(data)
})

module.exports = router;
