const express = require('express');
const app = express()
const db = require('./db') // Import the database connection from db.js
require('dotenv').config(); // Load environment variables from .env file


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

const PORT = process.env.PORT || 3000; // Use the PORT from environment variables or default to 3000


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})







// vikasweb77_db_user
// iieceeYoURqDux95
//mongodb+srv://vikasweb77_db_user:iieceeYoURqDux95@cluster0.3iwwwyo.mongodb.net/