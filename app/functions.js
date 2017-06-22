exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null,arr)
  },

  speak: function(fn, obj) {
    return fn.apply(obj)
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ", " + str2
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map((el) => fn.bind(null,el))
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null,str1,str2)
  },

  useArguments: function() {
    return Array.from(arguments).reduce((acc,el) => acc + el,0)
  },

  callIt: function(fn) {
    return fn.apply(null,Array.from(arguments).slice(1))
  },

  partialUsingArguments: function(fn) {
    return fn.bind.apply(fn, [null].concat(Array.from(arguments).slice(1)))
  },

  curryIt: function(fn) {
    return function(x) {
      return function(y) {
        return function(z) {
          return fn(x,y,z)
        }
      }
    }
  }
};
