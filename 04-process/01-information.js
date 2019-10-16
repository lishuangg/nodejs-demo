#!/usr/bin/node
//向控制台打印 CPU 架构信息以及操作系统版本信息
//打印进程 id 信息以及 Node.js 可执行文件的绝对路径信息
//在脚本中增加标准输入流的读取操作，让程序暂停执行

const log = console.log;

log('architecture:',process.arch);
log('platform:%s\n',process.platform);

log('process id:',process.pid);
log('exePath:%s\n',process.execPath);

log('node version:',process.version);
log('user id:',process.getuid());
log('group id:',process.getgid());
log('cwd:%s\n',process.cwd());

log('rss:',process.memoryUsage().rss);
log('heapTotal:',process.memoryUsage().heapTotal);
log('heapUsed:',process.memoryUsage().heapUsed);
log('external:%s\n',process.memoryUsage().external);

log('env:',process.env);
log('host name:',process.env.HOSTNAME);
