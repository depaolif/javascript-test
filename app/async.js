exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise((resolve,reject) => {
  		resolve(value)
  	})
  },

  manipulateRemoteData: function(url) {
  	return new Promise((resolve, reject) => {
  		$.ajax({
  			url,
  			success: function(data) {
  				resolve(data.people.map((el) => el.name).sort())
  			}
  		})
  	})
  }
};
