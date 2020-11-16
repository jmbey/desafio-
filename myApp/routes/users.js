var express = require('express');
var router = express.Router();
const usersController = require ("../controllers/usersController");

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/check', usersController.check);
router.get('/logout', usersController.logout);

router.get('/register', usersController.register);
router.post('/register', usersController.create);

module.exports = router;
