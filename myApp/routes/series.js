var express = require('express');
var router = express.Router();

/* GET series page. */
router.get('/', function(req, res, next) {
  res.render('series', { title: 'Series' });
  // res.send('vista de seriess');
});


module.exports = router;