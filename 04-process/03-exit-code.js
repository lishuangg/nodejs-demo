#!/usr/bin/node

//通过命令行参数获取程序的退出码，以该退出码退出程序

var n = process.argv[2];
const log = console.log;

if(typeof(n) === 'undefined' || isNaN(Number(n))){
  console.error('命令行参数不正确');
  process.exit(1);
}else{
  log('退出码：',n);
  process.exit(n);
}
