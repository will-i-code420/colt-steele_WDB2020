const User = require('../models/user');

module.exports = {
    renderRegisterForm (req, res) {
        res.render('users/register');
    },
    renderLoginForm (req, res) {
        res.render('users/login');
    },
    logout (req, res) {
        req.logout();
        req.flash('success', "Logged Out");
        res.redirect('/campgrounds')
    },
    async createUser (req, res, next) {
        const {username, email, password} = req.body.user;
        const user = new User({ email, username });
        try {
            const registered = await User.register(user, password);
            req.login(registered, err => {
                if (err) return next(err)
                req.flash('success', 'Wecome to YelpCamp!!');
                res.redirect('/campgrounds');
            })
        } catch (err) {
            console.log(err)
            req.flash('error', err.message);
            res.redirect('/register');
        }
    },
    login (req, res) {
        req.flash('success', 'Logged In');
        const redirectUrl = req.session.redirectUrl || '/campgrounds';
        delete req.session.redirectUrl;
        res.redirect(redirectUrl);
    }
}