const mongoose = require('mongoose');
const config = require('config');

const mongoURI = config.get('mongoURI');

const connectDB = async() => {
    try {
        const db = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        return db;
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

};

module.exports = connectDB;