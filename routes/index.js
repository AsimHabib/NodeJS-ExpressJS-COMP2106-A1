var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // call/render the index.ejs view 
  res.render('index',{title:'Home'});
});

/* GET register */
router.get('/register', function(req, res, next) {
  // call/render the register.ejs view 
  res.render('register');
});

/* GET login */
router.get('/login', function(req, res, next) {
  // call/render the login.ejs view 
  res.render('login');
});

/* GET 404 page */
/*router.get('/*', function(req, res, next) {
  res.render('404', {title: '404'});
});*/

module.exports = router;
