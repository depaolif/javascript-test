exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
  	this.greeting = str1
 	this.name = str2
  	this.sayIt = (() => `${this.greeting}, ${this.name}`)
  	return this
  }
};
