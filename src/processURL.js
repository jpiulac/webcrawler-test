/*eslint-disable no-console*/

const getHTML = require('./getPageHTML');
const getURLs = require('./getPageUrls');

// get the HTML and parse the URLs
const processURL = async (url, config, visited, external, b = null) => {
  try {
    let body = b; 
    if (!body) {
      body = await getHTML(url);
    }
    
    if (body.length) {
      const links = getURLs(url, body, config.domain, visited, external);
      return links || [];
    }
  } catch (err) {
    console.error(err.message);
  }
  return [];
};

module.exports = processURL;
