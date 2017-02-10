let express = require('express');
let router = express.Router();

/* GET contact index page */
router.get('/', function(req, res, next) {
   res.render('contact/index');
});

// make public
module.exports = router;
