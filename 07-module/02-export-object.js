#!/usr/bin/node

/**
 * 计算圆的直径
 *
 * @param radius {number} 圆的半径
 * @returns {number} 圆的直径
*/
/**
 * 计算圆的周长
 *
 * @param radius {number} 圆的半径
 * @returns {number} 圆的周长
*/
/**
 * 计算圆的面积
 *
 * @param radius {number} 圆的半径
 * @returns {number} 圆的面积
*/


var circle = {
  'area':function(radius){
    return Math.PI*radius*radius;
  },
  'circumference':function(radiius){
    return 2*Math.PI*radius;
  },
  'diameter':function(radius){
    return 2*radius;
  }
};
console.dir(module);
module.exports = circle;
