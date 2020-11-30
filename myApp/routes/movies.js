var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');
const loggedRenderingMw = require('../middlewares/loggedRenderingMW');
const authMW = require('../middlewares/authMW');

/* GET movies */
router.get('/', loggedRenderingMw , moviesController.list);
router.get("/detail/:id?", moviesController.getOne);
router.get('/create', authMW, moviesController.getGenres);
router.get('/edit/:id?',authMW, moviesController.update)
/* POST movies */
router.post('/create',authMW, moviesController.create);
router.post('/edit/:id?',authMW, moviesController.updateDone);
router.post('/delete/:id?',authMW, moviesController.delete);

module.exports = router;