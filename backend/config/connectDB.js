const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas', error);
        process.exit(1);
    }
};

const closeDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error closing MongoDB connection', error);
    }
};

module.exports = {
    connectDB,
    closeDB,
};