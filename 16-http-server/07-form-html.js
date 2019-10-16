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

    if(req.url === '/'){

      //200 ok
        var html = getHTML();
        res.writeHead(200,{'Content-Type':'text/html','Content-Length':Buffer.byteLength(html,'utf8')});
        res.end(html);
    }else{

      var it = qs.parse(url.parse(req.url).query);
        if(typeof it !== 'undefined'){
            items.push(it);
        }
    }
    res.end(getHTML());
}).listen(8080);

function getHTML(){
  var html = fs.readFileSync('todo.html').toString('utf8');

  html.replace('%',items.map(function(item){
    return '<li>'+item+'</li>';
  }).join('\n'));

}
