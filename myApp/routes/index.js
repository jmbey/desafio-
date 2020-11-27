var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'S&M Database' });
});

router.get('/', indexController.listMoviesySeries)



module.exports = router;
