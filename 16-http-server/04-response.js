#!/usr/bin/node

const http = require('http'),
    log = console.log;

http.createServer((req,res)=>{
    //请求数据的展示
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log();

    req.pipe(process.stdout);

    var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>hello world</title></head><body><h1>hello world!</h1></body></html>';

    if(req.url === '/'){ //如果是根路径
        //200 ok
        res.writeHead(200,{'Content-Type':'text/html','Content-Length':Buffer.byteLength(html,'utf8')});
        res.end(html);
    }else{
        //404 not found
        res.statusCode = 404;
        res.setHeader('Content-Type:','text/plain');
        res.end('error');
    }
    res.end('hello world!');
}).listen(8080);

//curl -i http://localhost:8080/abc/eff