const request = require('request-promise');

const getPageHTML = (url) => {
  return request(url);
};

module.exports = getPageHTML;