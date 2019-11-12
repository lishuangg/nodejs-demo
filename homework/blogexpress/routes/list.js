var express = require('express');
var router = express.Router();
var data = require('../data.json');

router.get('/', function(req, res, next) {
  // console.log(data.chapterList);
  res.render('list',{chapterList:data.chapterList});//<% code %>用来执行javascript代码
});

module.exports = router;
