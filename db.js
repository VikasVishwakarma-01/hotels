const mongoose = require('mongoose');
require('dotenv').config();
// define the mongoDB connection string
// const mongoURL = process.env.MONGODB_URL_LOCAL; // replace mydatabase with your MongoDB database name

const mongoURL = process.env.MONGODB_URL;

// connect to MongoDB using Mongoose
mongoose.connect(mongoURL)

// Get the default connection
// mongoose maintains a default connection object representing the mongoDB connection. We can use this object to listen for events and perform operations on the database.
const db = mongoose.connection;

// Define event listeners for the database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server')
})

db.on('error', (err) => {
    console.error('Error connecting to MongoDB', err)
})

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB')
})

// Export the database connection for use in other modules
module.exports = db;
