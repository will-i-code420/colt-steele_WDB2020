const express = require('express');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const { validateCampground } = require('../utilities/mongooseValidations');
const { isLoggedIn, isCampgroundAuthor } = require('../middleware');
const campgroundController = require('../controllers/campgrounds');

router.get('/', catchAsync(campgroundController.index));

router.get('/new', isLoggedIn, campgroundController.renderNewForm);

router.get('/:id', catchAsync(campgroundController.getDetails));

router.get('/:id/edit', isLoggedIn, isCampgroundAuthor, catchAsync(campgroundController.renderEditForm));

router.post('/', isLoggedIn, validateCampground, catchAsync(campgroundController.createCampground));

router.put('/:id', isLoggedIn, isCampgroundAuthor, validateCampground, catchAsync(campgroundController.updateCampground));

router.delete('/:id', isLoggedIn, isCampgroundAuthor, catchAsync(campgroundController.deleteCampground));

module.exports = router;