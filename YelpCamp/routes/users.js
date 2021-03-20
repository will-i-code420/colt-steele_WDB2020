const express = require('express');
const passport = require('passport');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const { validateUser } = require('../utilities/mongooseValidations');
const userController = require('../controllers/users');


router.get('/register', userController.renderRegisterForm);

router.get('/login', userController.renderLoginForm);

router.get('/logout', userController.logout)

router.post('/register', validateUser, catchAsync(userController.createUser));

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), userController.login);

module.exports = router;