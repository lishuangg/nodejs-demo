#!/usr/bin/node
//用同步的方式读取文件内容并将文件内容输出到控制台上
//同步API
const fs = require('fs'),
      file = process.argv[2] || __filename;

if(fs.existsSync(file)){
  console.log(fs.readFileSync(file).toString('utf8'));
}else{
  console.error('%s not exist!',file);
  process.exit(1);
}
