#!/usr/bin/node

//对耗时任务运行的时间进行采样

function longTask(){
  var num = 0;
  for(var i=0;i<10000;i++){
    for(var j=0;j<1000;j++){
      num += i*j;
    }
  }
  return num;
}

var n = longTask();
console.time('TEST');
console.log('n=%d',n);
console.timeEnd('TEST');

//console.time()和console.timeEnd()接受一个字符串作为参数，该字符串相当于计时的id。浏览器会将拥有相同参数(id)的console.time()与console.timeEnd()进行配对，记录两者之间的时间差。
