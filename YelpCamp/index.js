const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const db = mongoose.connection;
const methodOverride = require('method-override');
const ExpressError = require('./utilities/ExpressError');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

db.on('error', console.error.bind(console, "db connection error"));
db.once('open', () => {
    console.log('DB Connection Successful');
});

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Terribly Wrong!';
    res.status(statusCode).render('error', { err })
});

app.listen(3000, () => {
    console.log (`Server Running on Port 3000`);
});
