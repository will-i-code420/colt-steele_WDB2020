const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', console.error.bind(console, "db connection error"));
db.once('open', () => {
    console.log('DB Connection Successful');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', campgrounds);
});

app.get('/campgrounds/new', (req, res) => {
    res.render('/campgrounds/new');
});

app.get('/campgrounds/:id', async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findById({id});
    res.render('campgrounds/details', campground);
});

app.post('/new-campground', async (req, res) => {
    const campground = new Campground({req.body.campground});
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
});

app.listen(3000, () => {
    console.log (`Server Running on Port 3000`);
});
