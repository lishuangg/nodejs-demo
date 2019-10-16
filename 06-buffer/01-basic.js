#!/usr/bin/node

const log  = console.log;

//实例化一个 buffer 对象 buf1，缓冲区的大小是 256 字节，初始化第一个字节为零，控制台打印 buf1 的长度和内容
var buf1 = new Buffer(256);
buf1[0] = 0x11;

log('buf1 length:',buf1.length);
log('\n');
log("buf1:",buf1);
log('\n');

//循环初始化buffer中的每个字节
for(var i=0;i<buf1.length;i++) buf1[i]=i;
log('buf1:',buf1);
log('\n');

//填充数据
buf1.fill(0,0,256);
log('buf1:',buf1);
log('\n');

//类似数组，对buffer进行切片操作
var buf2 = buf1.slice(250,256);
log('buf2：',buf2);
log('\n');
//buffer数据转换成JSON数据
log('buf2：',buf2.toJSON());
log('\n');
log('buf2：',JSON.stringify(buf2));
log('\n');

//用数组初始化buffer
var arr = ['a',0xba,0xdf,0x00,255,10];
var buf3 = new Buffer(arr);

log("buf3：",buf3);
log('\n');

//字符串初始化buffer
var buf4 = new Buffer('hello world!');
log('buf4:',buf4);
log('\n');

// buffer 数据复制
buf4.copy(buf3, 0, 0, buf3.length);
log('\nbuf3:', buf3.length, buf3);

//UTF8编码
var str = '你好 wangding';
var buf5 = new Buffer(str);
log('buf5 length',buf5.length);
log('\n');
log('string length',str.length);
