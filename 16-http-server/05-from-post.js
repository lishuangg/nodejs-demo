#!/usr/bin/node

const http = require('http'),
    url = require('url'),

    qs = require('querystring'),
    log = console.log;
    var items = [];

http.createServer((req,res)=>{
    
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log();

    req.pipe(process.stdout);

    if(req.mothod === 'GET' && req.url === '/'){
        //200 ok
        var html = getHTML();
        res.writeHead(200,{'Content-Type':'text/html','Content-Length':Buffer.byteLength(html,'utf8')});
  
        res.end(html);
    }else if(req.mothod === 'POST' && req.url === '/'){
        //sumbit data
        var it = '';
        if(typeof it !== 'undefined'){
            items.push(it);
        }
        
        res.end(getHTML());
    }else{
        //error

    }
}).listen(8080);

function getHTML(){
    return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>TODO List</title></head><body><h1>TODO List</h1><ul>'+items.map(function(it){return "<li>"+it+"</li>"}).join("\n")+'</ul><form method="post" action="/"><input type="text" name="item"><input type="submit" value="提交"></form></body></html>';
}

//curl http://localhost:8080
