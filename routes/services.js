let express = require('express');
let router = express.Router();

/* GET services index page */
router.get('/', function(req, res, next) {
   res.render('services/index',{title:'Services'});
});

// make public
module.exports = router;
