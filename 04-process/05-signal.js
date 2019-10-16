#!/usr/bin/node
process.on('SIGINT', () => {
   console.log('your press ctrl-c or kill -2');
   process.exit();
});

process.on('SIGTSTP', () => {
   console.log('you press ctrl-z');
   process.exit();
});

process.stdin.resume();
