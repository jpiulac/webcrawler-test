const getUrls = require('get-urls');
const getHrefs = require('get-hrefs');

const url = require('url');

const seenUrls = new Set();

const getPageUrls = (baseUrl, html, domain, visited, external) => {
  const res = [];
  // get all urls in page
  getUrls(html).forEach(item => {
    const parsedUrl = new url.URL(item);
    seenUrls.add(parsedUrl.href);
    // is url in same domain and not visited?
    if (parsedUrl.hostname === domain && !visited.has(parsedUrl.href)) {
      res.push(parsedUrl.href);
    } else if (!visited.has(parsedUrl.href)) {
      external.add(parsedUrl.href); 
      //console.log(parsedUrl.href)
    }
  });

  // this is needed for relative urls
  getHrefs(html, { baseUrl }).forEach(item => {
    const parsedUrl = new url.URL(item);
    // TODO: fix domain check here
    if (parsedUrl.hostname === domain.replace('www.', '') && !visited.has(parsedUrl.href) && !seenUrls.has(parsedUrl.href)) {
      res.push(parsedUrl.href);
    }
  });
  return res;
};

module.exports = getPageUrls;