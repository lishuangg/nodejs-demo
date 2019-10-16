#!/usr/bin/node

var argv = process.argv;
var expression = argv[2];
const log = console.log;

if(typeof(expression) === 'undefined' || expression === '--help' || expression === '-h'){
  help();
}else{
  calc();
}

function help(){
  var msg = ''
    + 'usage:cmd-name [OPTION] [expression]\n'
    + 'evaluate the expression.\n'
    + '\n'
    + 'Mandatory arguments to long options are mandatory for short options too.\n'
    + ' -h,--help output help information an exit.\n';

  log(msg);
}

function calc(){
  log(expression + '=%s',eval(expression));
}

