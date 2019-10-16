#!/usr/bin/node

const log = console.log,
      fs = require('fs'),
      path = require('path'),
      file = process.argv[2],
      http = require('http');

if(process.argv.length !== 3) {
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}

try{
  var data = fs.readFileSync('./qr-code.jpg').toString('base64');
}catch(e){
  console.error(e.message);
  process.exit(2);
}

var ext  = path.extname(file);
var uriData = 'data:image/' + ext.slice(1, ext.length) + ';base64,' + data;

/*
var html = ''

  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
      + '<title></title>'
      + '</head>'
      + '<body>'
        + '<img src="data:image/jpg;base64,'+data+'">'
        + '</body>'
        + '</html>'
*/

var html = '<!DOCTYPE html><html><body><img alt="'
      + path.basename(file, ext) 
      + '" src="' + uriData + '"></body></html>';

http.createServer((req,res)=>{
  console.log(req.headers);
  console.log(req.url + '\n');
  res.end(html);
}).listen(8080);
