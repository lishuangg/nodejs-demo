#!/usr/bin/node
//删除文件和目录是两个API
//目录非空不能删除
const fs = require('fs'),
      dir = process.argv[2];

fs.rmdirSync(dir);
