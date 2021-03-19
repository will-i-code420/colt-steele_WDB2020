module.exports = {
    isLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.session.redirectUrl = req.originalUrl;
            req.flash('error', 'Please login');
            return res.redirect('/login');
        }
        next();
    }
}