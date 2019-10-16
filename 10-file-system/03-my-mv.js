#!/usr/bin/node
//除了能移动文件，可以修改文件名
//不存在则打印错误信息
//执行文件 移动的源文件 目标文件名
const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3] || __filename;
try{
  fs.renameSync(src,dst);
}catch(err){
  console.error(err.message);
  process.exit(1);
}
