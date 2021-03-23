const express = require('express');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const { validateCampground } = require('../utilities/mongooseValidations');
const { isLoggedIn, isCampgroundAuthor } = require('../middleware');
const campgroundController = require('../controllers/campgrounds');
const multer = require('multer');
const {storage} = require('../utilities/cloudinary');
const upload = multer({storage});

// fix post route so validateCampground runs before multer
// add check for image size and number of images limits
// make use of cloudinary to resize images to default size
router.route('/')
    .get(catchAsync(campgroundController.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgroundController.createCampground));

router.get('/new', isLoggedIn, campgroundController.renderNewForm);
// fix put route so validateCampground runs before multer
// add check for image size and number of images limits
router.route('/:id')
    .get(catchAsync(campgroundController.getDetails))
    .put(isLoggedIn, isCampgroundAuthor, upload.array('image'), validateCampground, catchAsync(campgroundController.updateCampground))
    .delete(isLoggedIn, isCampgroundAuthor, catchAsync(campgroundController.deleteCampground));

router.get('/:id/edit', isLoggedIn, isCampgroundAuthor, catchAsync(campgroundController.renderEditForm));

module.exports = router;