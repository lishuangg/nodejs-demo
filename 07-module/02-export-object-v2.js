#!/usr/bin/node

function area(radius){
   return Math.PI*radius*radius;
}
function circumference(radiius){
   return 2*Math.PI*radius;
}
function diameter(radius){
   return 2*radius;
}
module.exports.area = area;
module.exports.diameter = diameter;

console.dir(module);
