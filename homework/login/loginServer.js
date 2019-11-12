const http = require('http'),
    qs = require('querystring'),
    fs = require('fs');

http.createServer((req,res)=>{
    switch(req.method) {
        case 'GET':
            show(req,res);
            break;
        case 'POST':
            add(req,res);
            break;    
        default:
            err(res);
            break;
    }
}).listen(8081);

function show(req,res){
    if(req.url === '/login'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./login.html',(err,buf) => {
            if(err){
                throw err;
            }else{
                res.end(buf.toString('utf8'));
            }
        });      
    }else{err(res);}
}
function add(req,res){
    var body = "";
    var logincount = 1;
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        body = qs.parse(body);
        if(typeof req.headers['cookie'] === 'undefined') {
            logincount = 1;
        } else {
            var pair = req.headers['cookie'].split('=');
            logincount = Number(pair[1]) + 1;
        }
        res.setHeader('Set-cookie', `logincount=${logincount}; max-age=10000000`);
        if(body.username === 'zhangsan' && body.pwd === '123'){
            res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>document</title></head><body><h1>zhangsan这是您第${logincount}次访问本网站</h1></body></html>`);
        }else{
            res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>document</title></head><body>输入的用户名、密码错误</body></html>`);
        }
    })
}
function err(res){
    res.statusCode = 404;
    res.end('404 Error, resource not found!');
}
 