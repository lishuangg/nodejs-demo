#!/usr/bin/node

const fs = require('fs'),
      opt = process.argv[2],
      dir = process.argv[3];

var files = fs.readdirSync(__dirname);

if(opt == 'list'){
  var arr = [];
  var file;
  for(var i=0; i<files.length; i++){
    file = fs.statSync(files[i]);
    if(file.isFile()){
        var obj = {
          fileName:files[i],
          fileSize:file.size
        };  
      arr.push(obj); 
    }
  }
  console.log(arr);
}else if(opt == 'mkdir' && dir != undefined){
  fs.mkdirSync(dir);
}else{
  console.log('命令行参数错误');
  process.exit(1);
}