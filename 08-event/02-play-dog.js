#!/usr/bin/node

const Dog = require('./02-dog.js');

var taidi = new Dog('taiji',4);
var zangao = new Dog('zangao',9);

/*
taidi.on('bark',function(){
  console.log('%s barked! energy:%s',this.getName(),this.getEnergy());
});

zangao.on('bark',function(){
  console.log('%s barked! energy:%s',this.getName(),this.getEnergy());
});
*/

taidi.on('bark',onBark);
zangao.on('bark',onBark);

function onBark() {
    console.log('%s barked! energy: %s', this.name(), this.energy());
}

