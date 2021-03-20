const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utilities/catchAsync');
const { validateReview } = require('../utilities/mongooseValidations');
const { isLoggedIn, isReviewAuthor } = require('../middleware');
const reviewController = require('../controllers/reviews');

router.post('/', isLoggedIn, validateReview, catchAsync(reviewController.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviewController.deleteReview));

module.exports = router;