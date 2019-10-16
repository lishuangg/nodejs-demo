#!/usr/bin/node

const log = console.log;

var user = {
    'Name':'李爽',
    'qq':'1234567890',
    'Age':20

};

//三种占位符
log('Name:%s\t Age:%d',user.Name,user.Age);  //字符串类型  整数类型
log('lishuang Info:',user);   //对象类型

//四种输出方式
log('qq:%s',user.qq);//占位符输出
log('qq:',user.qq);//逗号间隔，多变量输出
log('qq:'+user.qq);//拼接字符串输出
log(`qq:${user.qq}`);//模板字符串输出

console.error('Error!something wrong!');
