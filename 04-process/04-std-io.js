#!/usr/bin/node

const msg = ['Name','Email','QQ','Mobile'];
var user = {},i=1;

console.log(msg[0]+':');

process.stdin.on('data',(data) => {
  user[msg[i-1]] = data.slice(0, data.length - 1).toString('utf8');
    if(i === 4) {
     console.log(user);
     process.exit();
    } else {
     process.stdout.write(msg[i++] + ': ');
    }
});

process.stdin.on('end', () => {
   console.log(user);
});
