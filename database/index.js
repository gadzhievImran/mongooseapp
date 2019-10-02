const mongoose = require('mongoose');

const Book = require('./book');

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.once('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.once('disconnected', () => console.log('Disconnected from MongoDB'));
mongoose.connection.on('error', error => console.log('MongoDB connection error', error));

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected from MongoDB');
    process.exit(0);
  })
});

mongoose.model('Book', Book);

module.exports = mongoose.connection;
