#!/usr/bin/node
//打印文件，参数是要打印的文件名，没有参数默认打印脚本本身内容
//文件不存在则打印错误信息
//用流的方式读取文件内容并将管道接入到标准输出流上
const fs = require('fs'),
      file = process.argv[2] || __filename;

var sourse = fs.createReadStream(file);//返回一个流对象
sourse.pipe(process.stdout);
sourse.on('error',function(err){
  console.error(err.message);
});
