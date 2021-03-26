const mongoose = require('mongoose');
const db = mongoose.connection;
const cities = require('./cities');
const {descriptors, places} = require('./seedHelpers');
const Campground = require('../models/campground');
require('dotenv').config();

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const accessToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken});

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', console.error.bind(console, "db connection error"));
db.once('open', () => {
    console.log('DB Connection Successful');
});

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const getGeoData = async location => {
    const geoData = await geocoder.forwardGeocode({
        query: location,
        limit: 1
    }).send();
    return geoData.body.features[0].geometry
}

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomNum = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 40) + 10;
        const location = `${cities[randomNum].city}, ${cities[randomNum].state}`;
        const coordinates = await getGeoData(location);
        const campground = new Campground({
            author: '605564810ca2af202de4d0d1',
            location,
            title: `${random(descriptors)} ${random(places)}`,
            description: 'blah blah blah',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/willicode/image/upload/v1616531906/YelpCamp/qm5ajtqkd94atey7cvgi.jpg',
                    filename: 'YelpCamp/qm5ajtqkd94atey7cvgi'
                },
                {
                    url: 'https://res.cloudinary.com/willicode/image/upload/v1616531908/YelpCamp/wqvtu5xzkrsvljorlvhu.jpg',
                    filename: 'YelpCamp/wqvtu5xzkrsvljorlvhu'
                }
            ]
        });
        campground.geometry = coordinates;
        await campground.save();
    }
}



seedDB().then(() => {
    mongoose.connection.close();
});