const { Schema } = require('mongoose');

const Book = new Schema({
  id: String,
  slug: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  isbn: { type: String, minLength: 10 },
  author: { type: String },
  publisher: { type: String },
  date: { type: Date, enum: ['en', 'ru'] },
  language: { type: String },
  edition: { type: Number, min: 1, default: 1 },
  pages: { type: Number, min: 0 },
  category: { type: String },
  topics: { type: [String] },
  description: { type: String },
});

Book.virtual('url').get(function() {
  return `/books/${this.slug}`;
});


module.exports = Book;
