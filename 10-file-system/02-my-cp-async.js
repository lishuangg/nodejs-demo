#!/usr/bin/node
//打印文件内容，参数 打印的文件名，没有参数时，默认打印脚本本身
//不存在打印错误信息
//异步方式读取文件内容   异步API
const fs = require('fs'),
      file = process.argv[2] || __filename;//__filename是全局变量

fs.readFile(file,function(err,data){
  if(err){
    console.error(err.message);
    process.exit(1);
  }else{
    console.log(data.toString('utf8'));
  }
});
