// dependencies
import express from 'express';

// "app" environment
const app = express();

// variables
const port = 3000;

// listen to requests
app.get('/', (req, res) => {
    res.send('Hello World');
});

// serve static files
app.use(express.static('public'));

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});