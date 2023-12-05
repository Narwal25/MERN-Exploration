const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 5000;

// DB connection
require('./db/conn.js');

app.use(express.json());

// Link router file
app.use(require('./router/auth'));


// Pages
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.get('/about', middleware, (req, res) => {
//     res.send('Welcome to the About page!');
// });
app.get('/contact', (req, res) => {
    res.send('Welcome to the Contact page!');
});

app.get('/signup', (req, res) => {
    res.send('Welcome to the Signup page!');
});

app.get('/signin', (req, res) => {
    res.send('Welcome to the Signin page!');
});



//listen at http://localhost:3000
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});