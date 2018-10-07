const test = require('tape');
const getPageUrls = require('../src/getPageUrls');

const sampleText = `<html>  
  http://www.google.com lorem epsum 
  http://www.google.com/foo lorem epsumlorem epsum http://www.theage.com.au
  http://example.com/test.gif lorem ipsum http://example.com/test.pdf
  http://www.google.co.uk </html>`;


test('should return all domain urls', (t) => {
  const visited = new Set();
  const urls = getPageUrls(sampleText, 'google.com', visited);
  t.deepEqual(urls, [ 'http://google.com/', 'http://google.com/foo' ], '| correct domain URLs returned');
  t.end();
});

test('should return only domain urls not visited', (t) => {
  const visited = new Set(['http://google.com/']);
  const urls = getPageUrls(sampleText, 'google.com', visited);
  t.deepEqual(urls, [ 'http://google.com/foo' ], '| correct domain URLs returned');
  t.end();
});