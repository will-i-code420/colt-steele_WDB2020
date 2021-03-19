const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const catchAsync = require('../utilities/catchAsync');
const { validateCampground } = require('../utilities/mongooseValidations');
const { isLoggedIn, isCampgroundAuthor } = require('../middleware');

router.get('/', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds});
}));

router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});

router.get('/:id', catchAsync(async (req, res) => {
    const {id} = req.params;
    const campground = await (await Campground.findById(id)).populate({path: 'reviews', populate: {path: 'author'}}).populate('author');
    if (!campground) {
        req.flash('error', 'Unable to locate campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/details', {campground});
}));

router.get('/:id/edit', isLoggedIn, isCampgroundAuthor, catchAsync(async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
        req.flash('error', 'Unable to locate campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', {campground});
}));

router.post('/', isLoggedIn, validateCampground, catchAsync(async (req, res) => {
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash('success', 'Campground Created!');
    res.redirect(`/campgrounds/${campground._id}`);
}));

router.put('/:id', isLoggedIn, isCampgroundAuthor, validateCampground, catchAsync(async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}, {new: true});
    req.flash('success', 'Campground Updated!');
    res.redirect(`/campgrounds/${campground._id}`);
}));

router.delete('/:id', isLoggedIn, isCampgroundAuthor, catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Campground Successfully Deleted!');
    res.redirect('/campgrounds');
}));

module.exports = router;