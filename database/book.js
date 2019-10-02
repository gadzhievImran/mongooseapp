const { Schema } = require('mongoose');

const Book = new Schema({
  id: String,
  slug: String,
  title: String,
  subtitle: String,
  isbn: String,
  author: String,
  publisher: String,
  date: Date,
  language: String,
  edition: Number,
  pages: Number,
  category: String,
  topics: [String],
  description: String,
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
    "pages": 332,
    "category": "web development",
    "topics": ["nodejs", "mongodb", "mongoose"],
    "description": "469 Bay Avenue, Bethany"
  }
