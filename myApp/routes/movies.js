var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');
const loggedRenderingMw = require('../middlewares/loggedRenderingMW');

/* GET movies */
router.get('/', loggedRenderingMw , moviesController.list);
router.get("/detail/:id?", moviesController.getOne);
router.get('/create', moviesController.getGenres);
router.get('/edit/:id?', moviesController.update)
/* POST movies */
router.post('/create', moviesController.create);
router.post('/edit/:id?', moviesController.updateDone);
router.post('/delete/:id?', moviesController.delete);

module.exports = router;