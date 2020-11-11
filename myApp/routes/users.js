var express = require('express');
var router = express.Router();
 const usersController = require ("../controllers/usersController.js")

/* GET */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });
router.get('/', usersController.list);

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Log In' });
  });

  router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Registrate' });
  });


router.post('/create', usersController.create);

module.exports = router;
