// dependencies
import express from 'express';
import ejs from 'ejs';

// "app" environment
const app = express();

// variables
const port = 3000;

// set template engine to ejs
app.set('view engine', 'ejs');

// listen to requests

// use route modules
import routeStart from './routes/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);

import routeContact from './routes/contact.js';
app.use('/contact', routeContact);

import routeAbout from './routes/about.js';
app.use('/about', routeAbout);

// serve static files
app.use(express.static('public'));

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});