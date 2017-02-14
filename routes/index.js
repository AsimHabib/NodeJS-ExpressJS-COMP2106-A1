var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // call/render the index.ejs view 
  res.render('index',{title:'Home'});
});

/* GET about index page */
router.get('/about', function(req, res, next) {
   res.render('about/index',{title:'About'});
});

/* GET projects index page */
router.get('/projects', function(req, res, next) {
   res.render('projects/index',{title:'Projects'});
});

/* GET services index page */
router.get('/services', function(req, res, next) {
   res.render('services/index',{title:'Services'});
});

/* GET contact index page */
router.get('/contact', function(req, res, next) {
   res.render('contact/index',{title:'Contact'});
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
