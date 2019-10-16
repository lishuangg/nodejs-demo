#!/usr/bin/node

const cp = require('child_process');

var child = cp.spawn('cat',['data.txt']),
    sort = cp.spawn('sort'),
    uniq = cp.spawn('uniq');

child.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin); //管道连接多个外部程序，上一个程序的输出就是下一个程序的输入
uniq.stdout.pipe(process.stdout);
