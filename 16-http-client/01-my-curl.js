#!/usr/bin/node

const addr = process.argv[2] ||'http://sample.wangding.in/web/one-div.html',
      url = require('url');
var protocol = url.parse(addr).protocol;
//console.log(protocol);


const http = (protocol === 'http:') ? require('http'):require('https');

http.get(addr,function(res){
  //打印起始行
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log('');

  //打印响应头
  console.log(res.headers);
  console.log('');

  //打印响应体
  res.pipe(process.stdout);
})
