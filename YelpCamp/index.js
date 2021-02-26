const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTED TO MONGO DB")
    })
    .catch(err => {
        console.log("ERROR CONNECTING TO MONGO DB")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(3000, () => {
    console.log (`Server Running on Port 3000`);
});
