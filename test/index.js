"use strict";
const path       = require('path');
const expect     = require('expect.js');
const browserify = require('browserify');
const concat     = require('concat-stream');


const wrap   = require('../');


describe("Main test suite", function(){

  it("should match references file", function(done) {
    var b = browserify( {
      standalone : "foo",
      entries : [
        path.join(__dirname, 'data/entry.js')
      ],
    });

    b.plugin(wrap, {
      prefix : "var firstNumber = 40;"
    });

    b.plugin(wrap, {
      suffix : "return foo(secondNumber);"
    });

    b.bundle().pipe(concat(function(body) {
      var result = Function("secondNumber", body).call(null, 2);
      expect(result).to.eql(42);
      done();
    }));

  });

});

