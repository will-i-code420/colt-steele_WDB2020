const express = require('express');
const passport = require('passport');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const { validateUser } = require('../utilities/mongooseValidations');
const userController = require('../controllers/users');

router.route('/register')
    .get(userController.renderRegisterForm)
    .post(validateUser, catchAsync(userController.createUser));

router.route('/login')
    .get(userController.renderLoginForm)
    .post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), userController.login);


router.get('/logout', userController.logout)

module.exports = router;