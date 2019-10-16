#!/usr/bin/node
//创建指定名字的空文件
//存在该空文件则覆盖文件
const fs = require('fs'),
      file = process.argv[2] || __filename;

fs.writeFileSync(file,'');
