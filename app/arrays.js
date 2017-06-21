exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((acc,el) => acc + el)
  },

  remove: function(arr, item) {
    return arr.filter((el) => el !== item)
  },

  removeWithoutCopy: function(arr, item) {
    let index = arr.indexOf(item)
    while (index !== -1) {
      arr.splice(index,1)
      index = arr.indexOf(item)
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    return arr.reduce((acc,el) => el === item ? acc + 1 : acc, 0)
  },

  duplicates: function(arr) {
    return arr.reduce((acc,el,index) => {
      if (arr.indexOf(el) !== index && acc.indexOf(el) === -1) acc.push(el)
      return acc
    },[])
  },

  square: function(arr) {
    return arr.map((el) => el * el)
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((acc,el,index) => {
      if (el === target) acc.push(index)
      return acc
    },[])
  }
};
