#!/usr/bin/node
//打印文件内容，参数打印的文件名，没有参数则打印本身
//不存在打印错误信息
//底层API打开文件，同步读取文件内容,是高级API
//用writeSync向控制台输出文件内容
const fs = require('fs'),
      file = process.argv[2] || __filename;

try{
  const fid = fs.openSync(file,'r');
  console.log(fs.readFileSync(fid).toString('utf8'));
  fs.closeSync(fid);
}catch(err){
  console.error(err.message);
  process.exit(1);
}

