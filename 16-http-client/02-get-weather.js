#!/usr/bin/node

const http = require('http'),
      city = process.argv[2] || '石家庄';

var addr = 'http://v.juhe.cn/weather/index?cityname=' + city + '&key=70b20823f67b5f0ca3358b796fd83260';
//console.log(addr);
//console.log(global.encodeURI(addr));

http.get(global.encodeURI(addr),(res)=>{
  //console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //console.log(res.headers);
 // console.log('');

  var weather = '';//weather接受数据是空字符串

  res.on('data',(data) => {
    weather += data;
   // weather += data.toString('utf8');
   //stringify将js值转换为JSON字符串;toString将值转换为字符串
  });

  res.on('end',() => {
    console.log(JSON.parse(weather));
  })
})
