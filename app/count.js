exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
	let number = start
  	const timerId = setInterval(() => {
  		console.log(number)
  		number++
  		if (number > end) clearInterval(timerId)
  	},100)
  	const timer = {
  		cancel: (() => clearInterval(timerId))
  	}
  	return timer
  }
};
