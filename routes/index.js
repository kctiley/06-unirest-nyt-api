var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NYT Scraper' });
});

router.get('/books', function(req, res) {
  console.log( "GET /books now firing.....")
    unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.NYT_API_KEY)
      .end(function (response) {
      var NYTBooks = response.body.results.books;
      console.log(NYTBooks[0]);
      res.render('index', {title: 'NYT Scraper', books: NYTBooks});
      })
})

module.exports = router;
