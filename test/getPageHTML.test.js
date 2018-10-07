const test = require('tape');
const getPageHTML = require('../src/getPageHTML');

test('should fetch the contents of the page in HTML', (t) => {
  // returns a promise
  getPageHTML('http://www.google.com').then(body => {
    t.ok(body.length > 500, '| length returned > 500');
    t.end();
  });
});