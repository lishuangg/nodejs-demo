#!/usr/bin/node
//不能删除目录，只能删除文件
//参数是文件名
//文件不存在打印错误信息，存在则删除
const fs = require('fs'),
      file = process.argv[2] || __filename;

if(fs.existsSync(src)){
  fs.unlinkSync(file);
}else{
  console.error('%s not exist!',file);
  process.exit(1);
}
