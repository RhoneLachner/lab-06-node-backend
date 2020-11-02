// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
// allows cross-origin requests
const cors = require('cors');

// Application Setup
// - make an express app!
const app = express();
// - get the port on which to run the server
const PORT = process.env.PORT;
// - enable CORS
app.use(cors());

// API Routes
// app.<verb>(<noun>, handler);
app.get('/hello', (req, res) => {
    try {
        res.send('hello!');
    }
    catch(err) {
        res.status(500).send('Sorry something went wrong, please try again');
    }
});

app.get('/data', (req, res) => {
    try {
        res.json({
            name: 'spot',
            weight: 9,
            friends: [{
                name: 'rover',
                weight: 12, 
            },
            {
                name: 'fido',
                weight: 7,
            }]
        });
    }
    catch(err) {
        // TODO: make an object and send via .json...
        res.status(500).send('Sorry something went wrong, please try again');
    }
});
