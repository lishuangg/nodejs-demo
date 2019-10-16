#!/usr/bin/node
//打印文件内容，有参数则打印参数文件，无参数则打印文件本身
//底层API打开文件，同步读取文件内容
//不存在打印错误信息
const fs = require('fs'),
      file = process.argv[2] || __filename;
try{
  var len = fs.statSync(file).size,
      buf = new Buffer(len),
      fid = fs.openSync(file,'r');

  fs.readSync(fid,buf,0,len,0);

  console.log(buf.toString('utf8'));

  fs.closeSync(fid);
}catch(e){
  console.error(e.message);
  process.exit(1);
}
