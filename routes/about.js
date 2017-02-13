let express = require('express');
let router = express.Router();

/* GET about index page */
router.get('/', function(req, res, next) {
   res.render('about/index',{title:'About'});
});

// make public
module.exports = router;
