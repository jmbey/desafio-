var express = require('express');
var router = express.Router();
const moviesController = require('./../controllers/api/moviesController');

/* GET movies */
router.get('/', moviesController.list);
router.get('/create', function(req, res, next) {
    res.render('create', { title: 'Create Movie' });
  });
router.get("/detail/:id?", moviesController.getOne);

/* POST movies */
router.post('/create', moviesController.create);


module.exports = router;