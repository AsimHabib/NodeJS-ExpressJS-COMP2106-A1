let express = require('express');
let router = express.Router();

/* GET about index page */
router.get('/about', function(req, res, next) {
   res.render('about/index');
});

// make public
module.exports = router;
