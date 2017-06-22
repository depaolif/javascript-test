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
    return arr.map(fn)
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null,str1,str2)
  },

  useArguments: function() {
    return Array.from(arguments).reduce((acc,el) => acc + el,0)
  },

  callIt: function(fn) {
    return fn.apply(null,arguments)
  },

  partialUsingArguments: function(fn) {
    return fn.bind(null,arguments)
  },

  curryIt: function(fn) {
    return fn.bind(null,arguments[0])
  }
};
