#!/usr/bin/node

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
 res.writeHead(200,{'Content-Type':'text/html'})  
 res.end('<!DOCTYPE html><html><head><title>hello</title></head><body<h1>hello node.js</h1><body><html>');
}).listen(8080);
