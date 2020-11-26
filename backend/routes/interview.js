var express = require('express');
var router = express.Router();
var codeInterviewBundle = require('../src/res/code_interview');
var cors = require('cors');

router.get('/', function(req, res, next) {
  res.send('code interview questions');
});

router.get('/list', function(req, res, next) {
  
});

router.get('/test', function(req, res, next) {
	codeInterviewBundle.test()
  res.send('test');
});

router.get('/question/:questionId', cors(), function(req, res, next){
	console.log(req.params);
	if(req.params.questionId != 1){
		res.json({"error":"no data"});
	}
	var data = {
		question: "implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?"
	}
	res.json(data)
})

module.exports = router;
