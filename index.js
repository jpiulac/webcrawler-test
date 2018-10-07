/*eslint-disable no-console*/
const { config } = require('./config');
const processURL = require('./src/processURL'); 

const queue = [];
const visitedLinks = new Set();
const externalLinks = new Set();

const newUrls = (urls) => urls.filter((url) => queue.indexOf(url) === -1);

const processQueue = async () => {
  while (queue.length) {
    try {
      const url = queue.shift();
      visitedLinks.add(url);
      const urls = await processURL(url, config, visitedLinks, externalLinks);
      // add new urls to list
      queue.push(...newUrls(urls)); 
    } catch(err) {
      console.error(err.message);
    }
  }
  // finished crawling pages
  const links = new Set([ ...visitedLinks, ...externalLinks]);
  const fs = require('fs');
  fs.writeFile('sitemap.json', JSON.stringify({links: [...links]}), 'utf8', () => console.log('done!'));
};

// enqueue first page to crawl
queue.push(config.url);
// while more pages to crawl
processQueue();


