const glob = require('glob-all');

describe('Checking generate html files', () => {
  it('should generate html file', done => {
    const files = glob.sync(['./dist/index.html', './dist/search.html']);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generate');
    }
  });
});
