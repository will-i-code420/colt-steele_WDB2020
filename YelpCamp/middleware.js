const Campground = require('./models/campground');
const Review = require('./models/review');

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            req.session.redirectUrl = req.originalUrl;
            req.flash('error', 'Please login');
            return res.redirect('/login');
        }
        next();
    },
    isCampgroundAuthor: async (req, res, next) => {
            const {id} = req.params;
            const campground = await Campground.findById(id);
            if (!campground.author.equals(req.user._id)) {
            req.flash('error', 'You do not have authorization');
            return res.redirect(`/campgrounds/${id}`);
        }
        next();
    },
    isReviewAuthor: async (req, res, next) => {
        const {id, reviewId} = req.params;
        const review = await Review.findById(reviewId);
        if (!review.author.equals(req.user._id)) {
        req.flash('error', 'You do not have authorization');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}
}