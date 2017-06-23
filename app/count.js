exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	let number = start
    console.log(number)
  	const timerId = setInterval(() => {
      number++
  		console.log(number)
  		if (number === end) clearInterval(timerId)
  	},100)
  	const timer = {
  		cancel: (() => clearInterval(timerId))
  	}
  	return timer
  }
};
