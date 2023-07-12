const express = require('express')
const mongoose = require('mongoose');
const app = express()







app.listen(3000, () => {
    console.log("server is on Port 3000")
})

mongoose.connect("mongodb://localhost:27017/Todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        // Start performing database operations
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });