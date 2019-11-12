var express = require('express');
var router = express.Router();
var data = require('../data.json');

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  // console.log(req.body);
  for(var i=0; i<data.users.length; i++){
    if(req.body.username === data.users[i].username && req.body.pwd === data.users[i].password){
      res.redirect('/list');
    }else{
      res.send('用户名或者密码错误！');
    }
  }
});

module.exports = router;
