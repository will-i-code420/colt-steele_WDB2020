const Campground = require('../models/campground');
const {cloudinary} = require('../utilities/cloudinary');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const accessToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken});

module.exports = {
    async index (req, res) {
        const campgrounds = await Campground.find({});
        res.render('campgrounds/index', {campgrounds});
    },
    renderNewForm (req, res) {
        res.render('campgrounds/new');
    },
    async renderEditForm (req, res) {
        const {id} = req.params;
        const campground = await Campground.findById(id);
        if (!campground) {
            req.flash('error', 'Unable to locate campground!');
            return res.redirect('/campgrounds');
        }
        res.render('campgrounds/edit', {campground});
    },
    async getDetails (req, res) {
        const {id} = req.params;
        const campground = await Campground.findById(id).populate({
            path: 'reviews',
            populate: {
                path: 'author'
            }
        }).populate('author');
        if (!campground) {
            req.flash('error', 'Unable to locate campground!');
            return res.redirect('/campgrounds');
        }
        res.render('campgrounds/details', {campground});
    },
    async createCampground (req, res) {
        const geoData = await geocoder.forwardGeocode({
            query: req.body.campground.location,
            limit: 1
        }).send();
        const campground = new Campground(req.body.campground);
        campground.geometry = geoData.body.features[0].geometry
        campground.images = req.files.map(file => ({url: file.path, filename: file.filename}));
        campground.author = req.user._id;
        await campground.save();
        req.flash('success', 'Campground Created!');
        res.redirect(`/campgrounds/${campground._id}`);
    },
    // update findByIdAndUpdate to work with images and check if geometry changed and update instead of doing double save
    async updateCampground (req, res) {
        const {id} = req.params;
        const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}, {new: true});
        const imgs = campground.images = req.files.map(file => ({url: file.path, filename: file.filename}));
        campground.images.push(...imgs);
        if (req.body.deleteImgs) {
            for (let name of req.body.deleteImgs) {
                cloudinary.uploader.destroy(name)
            }
            await campground.updateOne({$pull: {images: {filename: {$in: req.body.deleteImgs}}}})
        }
        await campground.save();
        req.flash('success', 'Campground Updated!');
        res.redirect(`/campgrounds/${campground._id}`);
    },
    async deleteCampground (req, res) {
        const { id } = req.params;
        await Campground.findByIdAndDelete(id);
        req.flash('success', 'Campground Successfully Deleted!');
        res.redirect('/campgrounds');
    }
}