exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	let newString = ''
    let substr = ''
    for (let i in str) {
      if (str[i] === str[i-1]) {
        if (substr.length < amount) substr += str[i]
      } else {
        newString += substr
        substr = '' + str[i]
      }
    }
    newString += substr
    return newString
  },

  wordWrap: function(str, cols) {
    // looks ahead to see if there will be another space before a line break is needed
    function spaceAhead(str, i, cols, currentCol) {
      const substr = str.slice(
        parseInt(i,10) + 1,
        parseInt(i,10) + 1 + cols - currentCol.length
      )
      return substr.includes(' ')
    }

  	let newString = ''
  	let currentCol = ''
  	for (let i in str) {
  		if (str[i] === ' ' && !spaceAhead(str, i, cols, currentCol)) {
  			newString += currentCol + '\n'
  			currentCol = ''
  		} else {
  			currentCol += str[i]
  		}
  	}
  	newString += currentCol
  	return newString
  },

  reverseString: function(str) {
  	let newString = ''
  	for (let i = str.length-1; i >= 0; i--) {
  		newString += str[i]
  	}
  	return newString
  }
};
