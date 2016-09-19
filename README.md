browserify-wrap, a _very simple_ browserify plugin to wrap your output bundle with a prefix or a suffix (or both)

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


b.bundle().pipe(somwhere);
```



# Credits
* [131](https://github.com/131)


# TODO
* Write few tests


# Keywords / shout box
browserify, prefix, suffix, wrapper

