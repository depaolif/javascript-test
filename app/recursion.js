exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	if (typeof data === 'string' && !dirName) {
  		return [data]
  	} else if (typeof data === 'string' && dirName) {
  		return []
  	} else {
  		let dir = !dirName || dirName === data["dir"] ? undefined : dirName
  		let arr = [], files = data["files"]
  		for (let i in files) {
  			arr = arr.concat(recursionAnswers.listFiles(files[i],dir))
  		}
  		return arr
  	}
  },

  permute: function(arr) {
    let perms = []
    for (let i = 0; i < arr.length; i++) {
      let subArr = arr.slice(0,i).concat(arr.slice(i+1))
      let rem = recursionAnswers.permute(subArr)
      if (rem.length === 0) {
        perms.push([arr[i]])
      } else {
        for (let j = 0; j < rem.length; j++) {
          perms.push([arr[i]].concat(rem[j]))
        }
      }
    }

    return perms
  },

  fibonacci: function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return recursionAnswers.fibonacci(n-1) + recursionAnswers.fibonacci(n-2)
  },

  validParentheses: function(n) {
    // simple recursive function that works on only parens
    if (!n.includes('(') && !n.includes(')')) {
      return true
    } else if (n[0] === '(' && n.includes(')')) {
      n = n.replace('(','').replace(')','')
      return recursionAnswers.validParentheses(n)
    } else {
      return false
    }

    // or a non-recursive function that works on complicated strings, implements a stack
    // let parens = [], bad = false
    // for (let i in n) {
    //   switch(n[i]) {
    //     case '(':
    //     case '[':
    //     case '{':
    //       parens.push(n[i])
    //       break
    //     case ')':
    //       parens[parens.length-1] === '(' ? parens.pop() : bad = true
    //       break
    //     case ']':
    //       parens[parens.length-1] === '[' ? parens.pop() : bad = true
    //       break
    //     case '}':
    //       parens[parens.length-1] === '{' ? parens.pop() : bad = true
    //   }
    //   if (bad) return false
    // }
    // return parens.length === 0
  }
};
