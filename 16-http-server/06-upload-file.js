#!/usr/bin/node

const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring'),
      log = console.log;

http.createServer((req,res)=>{
//请求数据的展示
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
    var fl = '';
    req.setEncoding('binary');
    req.on('data',(data)=>{
      fl += data;
    });
    req.on('end',()=>{
     //parse fl
      //get file name
      var filename = qs.parse(fl.split('\r\n')[1].split(';')[2].trim())['filename'];
      filename = filename.slice(1,filename.length-1);
      log(filename);

      //get file data
      var filedata = fl.split('\r\n')[4];
      log(filedata);

      fs.writeFileSync(filename,filedata,{'encoding':'binary'})
   });
    res.end('ok!')

}).listen(8080);

//curl -F 'file=@./tempale.js' http://localhost:8080
