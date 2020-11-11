var express = require('express');
var router = express.Router();
const seriesController = require('./../controllers/api/seriesController');

/* GET series page. */
router.get('/', seriesController.list);
router.get('/create', function(req, res, next) {
  res.render('createSerie', { title: 'Create Serie' });
});
router.get("/detail/:id?", seriesController.getOne);

router.post('/create', seriesController.create);

module.exports = router;