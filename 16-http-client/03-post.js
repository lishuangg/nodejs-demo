#!/usr/bin/node

const http = require('http'),
      addr = 'http://localhost:8080/',
      url = require('url');

var msg = process.argv[2] || 'hello';

var options = url.parse(addr);
options.method = 'POST';

http.request(options,function(res){
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
  console.log('');

  res.pipe(process.stdout);
}).end(msg + '\n');
