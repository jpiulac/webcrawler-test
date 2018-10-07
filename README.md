## Simple Web Crawler 

Creating robust code to handle all scenarios is quite complex as web pages can often be written quite badly;

/Person.html == /PERSON.html == /PErsoN.htm

this code will treat this as three separate urls.
It's just a simple example but highlights the assumption made that the webpage we are processing is "well written"

Also url arguments are not stripped out so:

index.html?a=123 and 
index.html?a=1234 

are considered 2 separate URLs.

Validation and data sanitising / normalising could be quite complex. 

Other assumptions:

*  URL crawling is for GET requests only with no authentication mechanism

* No attention paid to Robots.txt files

* Difficult to test!! 
  - Basic unit testing implemented 
  - Integration tests needed but require mocking target webpage (TODO)







## USAGE
```
git clone https://github.com/jpiulac/webcrawler-test.git
cd webcrawler-test
npm install 
```

**update the url and domain in config/index.js**


### RUN
```
node index.js
```
### TEST
```
npm test
```

