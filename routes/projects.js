let express = require('express');
let router = express.Router();

/* GET projects index page */
router.get('/', function(req, res, next) {
   res.render('projects/index',{title:'Projects'});
});

// make public
module.exports = router;
