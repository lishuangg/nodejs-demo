#!/usr/bin/node

function Radio(station){
  var _listeners = {};

  setTimeout(()=>{
    emit('play',station);
  },0);

  setTimeout(()=>{
    emit('stop',station);
  },5000);

  function emit(ev,arg){
    if(typeof(_listeners[ev]) === 'undefined'){
      console.log('Error:%s not found',ev);
      process.exit(1);
    }
    _listeners[ev].forEach((fn)=>{
      fn.call(this,arg);
    });
  };
  this.on = (ev,fn)=>{
    if(typeof _listeners[ev] === 'undefined'){
      _listeners[ev] = [];
    }
    _listeners[ev].push(fn);
  };
};
module.exports = Radio;
