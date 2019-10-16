#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return ;
  var fileName = __dirname + req.url;
  console.log(fileName);
  res.end(fs.readFileSync(fileName).toString('utf8'));
  /*console.log(req.url);*/
    res.end('hello world!');
}).listen(8080);
console.log(process.pid);
