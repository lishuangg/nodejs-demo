#!/usr/bin/node
//只能复制文件内容，不能复制文件权限
//用cat+文件 查看
const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3] || __filename;

//src.pip(dst)
//src = fs.createReadStream
//dst = fs.createWriteStream

if(fs.existsSync(src)){
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}else{
  console.error('%s not exists!',src);
  process.exit(1);
}
