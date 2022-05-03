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
app.get('/', (req, res) => {
    res.send('Hello World');
});

// listen to '/start' och ange template metoden render()
app.get('/start', (req, res) => {   
    res.render('index');
});

// listen to '/about'  och ange template metoden render()
app.get('/about', (req, res) => {
    res.render('about');
});

// listen to '/contact'  och ange template metoden render()
app.get('/contact', (req, res) => {
    res.render('contact');
});

// serve static files
app.use(express.static('public'));

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});