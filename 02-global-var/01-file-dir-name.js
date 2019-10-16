#!/usr/bin/node

console.log('dir name:',__dirname);
console.log('file name:',__filename);

//方案一  要分别考虑跨平台
//opterate data file
var file = __dirname + '/data/db.xml';
console.log('file name:',file);

//windows data file
file = __dirname + '\\data\\db.xml';
console.log('file name in windows:',file);


//方案二  代码复杂，平台考虑不全面
switch(os){
  case 'linux':
    file = __dirname + '';
     break;
  case 'win32':
    file = __dirname + '';
    break;
  default:
    fileName = 'something wrong';
}

//方案三  最佳方案 不用考虑跨平台
//path.join(path1，path2，path3.......)
//将路径片段使用特定的分隔符（window：\）连接起来形成路径，并规范化生成的路径。
 const path = require('path');
 file = path.join(__dirname, 'data', 'db.xml');
 console.log('fileName:',file);
