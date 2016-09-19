[browserify-wrap](https://github.com/131/browserify-wrap) is a  _very simple_ browserify plugin to wrap your output bundle with a prefix and/or a suffix

# API
```
const wrap = require('browserify-wrap');

var b = browserify();

b.plugin(wrap, {
  prefix : "[cool javascript prefix code here];"
});


b.plugin(wrap, {
  suffix : "[cool javascript suffix code here];"
});


b.bundle().pipe(somewhere);
```


# Credits
* [131](https://github.com/131)


# Keywords / shout box
browserify, prefix, suffix, wrapper, plugin, browserify-plugin


[![Build Status](https://travis-ci.org/131/browserify-wrap.svg?branch=master)](https://travis-ci.org/131/browserify-wrap)
[![Coverage Status](https://coveralls.io/repos/github/131/browserify-wrap/badge.svg?branch=master)](https://coveralls.io/github/131/browserify-wrap?branch=master)
