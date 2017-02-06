var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* GET 404 page */
router.get('/*', function(req, res, next) {
  res.render('404', {title: '404'});
});

module.exports = router;


