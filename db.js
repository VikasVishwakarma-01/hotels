const mongoose = require('mongoose');

// define the mongoDB connection string
const mongoURL = 'mongodb://localhost:27017/hotels'; // replace mydatabase with your MongoDB database name

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
