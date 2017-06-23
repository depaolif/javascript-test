if ( typeof window === 'undefined' ) {
  require('../../app/recursion');
  var expect = require('chai').expect;
  var _ = require('underscore');
}

describe('recursion', function() {
  var fileData = {
    dir: 'app',
    files: [
      'index.html',
      {
        dir: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir: 'vendor',
            files: [
              'jquery.js',
              'underscore.js'
            ]
          }
        ]
      },
      {
        dir: 'css',
        files: [
          'reset.css',
          'main.css'
        ]
      }
    ]
  };

  it('you should be able to return a list of files from the data', function() {
    var result = recursionAnswers.listFiles(fileData);
    expect(result.length).to.eql(8);
    expect(result.indexOf('index.html') > -1).to.be.ok;
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return a list of files in a subdir', function() {
    var result = recursionAnswers.listFiles(fileData, 'js');
    expect(result.length).to.eql(5);
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return all permutations of an array', function() {
    expect(recursionAnswers.permute(['a','b','c'])).to.eql([
      ["a", "b", "c"],
      ["a", "c", "b"],
      ["b", "a", "c"],
      ["b", "c", "a"],
      ["c", "a", "b"],
      ["c", "b", "a"]])
  })

  it('you should be able to return the fibonacci number in nth place', function() {
    var fibNumbers = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]
    expect(recursionAnswers.fibonacci(0)).to.eql(fibNumbers[0])
    expect(recursionAnswers.fibonacci(3)).to.eql(fibNumbers[3])
    expect(recursionAnswers.fibonacci(8)).to.eql(fibNumbers[8])
    expect(recursionAnswers.fibonacci(11)).to.eql(fibNumbers[11])
    expect(recursionAnswers.fibonacci(16)).to.eql(fibNumbers[16])
  })

  it('you should be able to return whether the parenthesis set is balanced', function() {
    expect(recursionAnswers.validParentheses('()')).to.be.ok
    expect(recursionAnswers.validParentheses('(())')).to.be.ok
    expect(recursionAnswers.validParentheses('()()')).to.be.ok
    expect(recursionAnswers.validParentheses('(()(')).not.to.be.ok
    expect(recursionAnswers.validParentheses('(')).not.to.be.ok

  })
});
