"use strict";

const  fs     = require('fs');
const through = require('through2');

const wrapper  = function(b, opts) {


  b.on("bundle", function(stream) {

    var prefixed = true;
    if(opts.prefix)
      prefixed = false;

    var write = function(buf, enc, next) {
      if(!prefixed)
        this.push(opts.prefix);

      prefixed = true;
      this.push(buf);
      next();
    };

    var end = function() {
      if(opts.suffix)
        this.push(opts.suffix)
      this.push(null);
    }

    b.pipeline.get("wrap").unshift(through(write, end));
  })
}


wrapper.concat = function(files, sep){
  var body = files.map((path) => fs.readFileSync(path, 'utf-8') ).join(sep || '');
  return body;
}


module.exports = wrapper;