"use strict";

const expect = require('expect.js');
const path   = require('path');
const wrap   = require('../');


describe("Concat test suite", function(){

  it("should merge two contents", function() {
    var merged = wrap.concat([
      path.join(__dirname, "data/left"),
      path.join(__dirname, "data/right"),
    ], "<=>");

    expect(merged).to.eql(`this is left<=>this is right`);

    var merged = wrap.concat([
      path.join(__dirname, "data/left"),
      path.join(__dirname, "data/right"),
    ]);

      //default separator
    expect(merged).to.eql(`this is leftthis is right`);


  });

});

