#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process id:',process.pid);

var child = cp.fork('./02-child.js');

global.setTimeout(function(){
  child.send('Hello, i am your father');
},2000);
