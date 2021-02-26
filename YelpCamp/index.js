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

app.post('/new-campground', async (req, res) => {
    const {title, price, description, location} = req.body;
    const campground = new Campground({title, price, description, location});
    await campground.save();
    res.render('/campgrounds/details', campground);
});

app.listen(3000, () => {
    console.log (`Server Running on Port 3000`);
});
