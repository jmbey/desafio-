var express = require('express');
var router = express.Router();
const moviesController = require('./../controllers/api/moviesController');

/* GET list movies */
router.get('/', moviesController.list);
router.get('/create', moviesController.create);

router.post('/create', moviesController.create);


module.exports = router;