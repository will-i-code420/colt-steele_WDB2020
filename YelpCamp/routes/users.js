const express = require('express');
const passport = require('passport');
const router = express.Router;
const User = require('../models/user');
const catchAsync = require('../utilities/catchAsync');
const { validateUser } = require('../utilities/mongooseValidations');


router.get('/register', (req, res) => {
    res.render('users/register');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Logged Out");
    res.redirect('/campgrounds')
})

router.post('/register', validateUser, catchAsync(async (req, res, next) => {
    const {username, email, password} = req.body.user;
    const user = new User({ email, username });
    try {
        const registered = await new User.register(user, password);
        req.login(registered, err => {
            if (err) return next(err)
            req.flash('success', 'Wecome to YelpCamp!!');
            res.redirect('/campgrounds');
        })
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/register');
    }
}));

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), (req, res) => {
    req.flash('success', 'Logged In');
    const redirectUrl = req.session.redirectUrl || '/campgrounds';
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);
});

module.exports = router;