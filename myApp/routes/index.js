var express = require('express');
var router = express.Router();
const moviesController = require('./../controllers/api/moviesController');
const seriesController = require('./../controllers/api/seriesController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'S&M Database' });
});



module.exports = router;
