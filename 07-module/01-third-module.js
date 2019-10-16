#!/usr/bin/node

const chalk = require('chalk'),
      log = console.log;

log('this is '+chalk.red('red.'));
log('this is '+chalk.green('green.'));
log('this is '+chalk.red('red.')+'and '+chalk.green('green.'));
