const mongoose = require('mongoose');
const db = mongoose.connection;
const cities = require('./cities');
const {descriptors, places} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', console.error.bind(console, "db connection error"));
db.once('open', () => {
    console.log('DB Connection Successful');
});

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomNum = Math.floor(Math.random() * cities.length);
        const campground = new Campground({
            location: `${cities[randomNum].city}, ${cities[randomNum].state}`,
            title: `${random(descriptors)} ${random(places)}`
        });
        await campground.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});