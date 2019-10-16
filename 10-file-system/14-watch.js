#!/usr/bin/node

const fs = require('fs'),
      dst = process.argv[2];
//watch监控目录，watchFile监控文件
fs.watch(dst,function(evt,file){
  console.log('%s happened with file:%s',evt,file);
});
    
