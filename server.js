const express = require('express');
const app = express()
const db = require('./db') // Import the database connection from db.js

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // Middleware to parse JSON request bodies




app.get('/', (req, res) => {
  res.send('Welcome to my hotel')
})

// import the router files 

const menuRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuRoutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


app.listen(3000, () => {
  console.log('Listening on port 3000')
})