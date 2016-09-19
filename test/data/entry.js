"use strict";

const sum = require('./sum');

//firstNumber must be defined in browserify-wrap  prefix
//this module is exported as standalone bundle and called in the browserify-wrap suffix

module.exports = function addFirst(second){
  return sum(firstNumber, second)
}
