const express = require('express');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const { validateCampground } = require('../utilities/mongooseValidations');
const { isLoggedIn, isCampgroundAuthor } = require('../middleware');
const campgroundController = require('../controllers/campgrounds');

router.route('/')
    .get(catchAsync(campgroundController.index))
    .post(isLoggedIn, validateCampground, catchAsync(campgroundController.createCampground));

router.get('/new', isLoggedIn, campgroundController.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgroundController.getDetails))
    .put(isLoggedIn, isCampgroundAuthor, validateCampground, catchAsync(campgroundController.updateCampground))
    .delete(isLoggedIn, isCampgroundAuthor, catchAsync(campgroundController.deleteCampground));

router.get('/:id/edit', isLoggedIn, isCampgroundAuthor, catchAsync(campgroundController.renderEditForm));

module.exports = router;