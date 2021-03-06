#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function Dog(name,energy){
  var _name,_energy;
  var that = this;

  EventEmitter.call(this);//调用基类

  _name = name;
  _energy = energy;

  var timer = setInterval(()=>{
    if(_energy > 0){
      that.emit('bark');
      _energy--;
    } else {
      clearInterval(timer);
    }
  },1000);
//两个公开方法获得两个方法
  this.getName = () =>_name;
  this.getEnergy = () =>_energy;
}

Dog.prototype = EventEmitter.prototype;
module.exports = Dog;
