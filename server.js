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

// routes...
import routeStart from './routes/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);

// uppgift: skapa egna moduler som kan 
// hantera trafik för sidorna contact och about
// tips: kopiera den modul som finns redan o redigera den :)
// routes/start.js

import routeContact from './routes/contact.js';
app.use('/contact', routeContact);
import routeAbout from './routes/about.js';
app.use('/about', routeAbout);



// listen to '/about'  och ange template metoden render()
/* app.get('/about', (req, res) => {
    res.render('about');
});
 */
// listen to '/contact'  och ange template metoden render()
/* app.get('/contact', (req, res) => {
    res.render('contact');
});
 */



// serve static files
app.use(express.static('public'));

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});