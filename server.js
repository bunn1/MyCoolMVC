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

// listen to '/start'
app.get('/start', (req, res) => {
   
    // processa innehållet från en ejs fil
    res.render('index');
});

// listen to '/about'
app.get('/about', (req, res) => {
   
    // processa innehållet från en ejs fil
    res.render('about');
});


// serve static files
app.use(express.static('public'));

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});