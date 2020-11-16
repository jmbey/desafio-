var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');
const seriesController = require('../controllers/seriesController');
const usersController = require('../controllers/usersController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'S&M Database' });
});

router.get('/', usersController.processLogin, moviesController.list, seriesController.list)



module.exports = router;
