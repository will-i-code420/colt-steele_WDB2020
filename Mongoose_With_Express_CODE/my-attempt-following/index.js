const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTED TO MONGO DB")
    })
    .catch(err => {
        console.log("ERROR CONNECTING TO MONGO DB")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log (`Server Running on Port 3000`);
});