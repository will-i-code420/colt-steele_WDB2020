const express = require('express');
const passport = require('passport');
const router = express.Router;
const User = require('../models/user');
const catchAsync = require('../utilities/catchAsync');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/register', catchAsync(async (req, res) => {
    const {username, email, password} = req.body.user;
    const user = new User({ email, username });
    try {
        const registered = await new User.register(user, password);
        req.flash('success', 'Wecome to YelpCamp!!');
        res.redirect('/campgrounds')
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/register');
    }
}));

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), (req, res) => {
    req.flash('success', 'Logged In');
    res.redirect('/campgrounds');
});

module.exports = router;