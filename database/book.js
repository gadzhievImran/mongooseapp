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

module.exports = Book;

const a =  {
    "id": "5d951c21477ac5b6e97d47ed",
    "slug": "web_development_with_node_js",
    "title": "Web development with node js",
    "subtitle": "leveraging the javascript stack",
    "isbn": "2365342123",
    "author": "Euthan Brown",
    "publisher": 22,
    "date": "July 25, 2014",
    "language": "English",
    "edition": 1,
    "pages": 54,
    "category": "web development",
    "topics": ["nodejs", "mongodb", "mongoose"],
    "description": "469 Bay Avenue, Bethany"
  }
