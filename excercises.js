


function debounce(fn, wait) {
  let timeout;

  return function(...args) {
    const ctx = this;
    clearTimeout(timeout);
    timeout = setTimeout(()=> fn.apply(ctx, args), wait);
  }
}


function memoize(fn) {
  let cache = {};

  return (...args) => {
    let result;
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    else {
      return cache[key] = fn(...args);
    }
    //cache[key] = cache[key] ? cache[key] : fn(...args);
  }
}

const factorial = (n, acc = 1) => {
  if (n < 2) return acc;
  return factorial(n-1, n * accum)
}

function fib(n) {
  return n < 1 ? 0 
      :  n <=2 ? 1
      :  fib(n-1) + fib(n-2);
}


var Foo = function(a) {
  function bar() {
    return a;
  }
  this.baz = function() {
    return a;
  };
};

Foo.prototype = {
  biz: function() {
    return a;
  }
};
var f = new Foo(7);

f.bar();  // f.bar() is not a function
f.baz();  // 7
f.biz();  // a is not defined error.


// Count and Say
//http://blog.sodhanalibrary.com/2015/06/back-to-main-article-count-and-say.html#.WZNF23eGNR0
