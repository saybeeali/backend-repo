const express = require('express');
const cors = require('cors');

const projects = require('./projects.json')
const about = require('./about.json')

const app = express();

//middleware 
app.use(cors());

//home route 
app.get('/', (req,res) => {
    res.send('Home Page!');
});
//route for projects
app.get('/projects', (req,res) => {
    res.json(projects);
});
// route for about 
app.get('/about', (req,res) => {
    res.json(about);
});
//port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));