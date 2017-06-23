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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
