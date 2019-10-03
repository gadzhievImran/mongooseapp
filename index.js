const database = require('./database');

const Book = database.model('Book');

Book.create({
  // "id": "5d951c21477ac5b6e97d47ed",
  "slug": "web_development_with_node_js",
  "title": "Web development with node js",
  "subtitle": "leveraging the javascript stack",
  "isbn": "23242332123",
  "author": {
    "firstName": "Euthan",
    "lastName": "Brown"
  },
  "publisher": 22,
  "date": "July 25, 2014",
  "language": "en",
  "edition": 1,
  "pages": 102,
  "category": "web development",
  "topics": ["nodejs", "mongodb", "mongoose", "express"],
  "description": "469 Bay Avenue, Bethany"
})
  .then(book => console.log(book, 'book'));

// find with method addTopic

// Book.findOne().then(book => {
//   // book.addTopic('Mongoose');
//   book.removeTopic('Mongoose');
// });

// Book.find().byTopic('express').then(book => {
//   console.log(book);
// });

// update

// Book.updateOne({ _id: '5d95bab7540b739019ad8eed' }, { $set: { language: 'ru' } })
//   .then(result => console.log(result));

// delte

// Book.deleteOne({ _id: '5d95bab7540b739019ad8eed' })
//   .then(result => console.log(result, 'result'));

// create new document with model

// const book = new Book({
//   "_id" : "5d95c7e3c36f46914bdfcf88",
//   "edition" : 1,
//   "topics" : [
//     "nodejs",
//     "mongodb",
//     "mongoose",
//     "express"
//   ],
//   "slug" : "web_development_with_node_js",
//   "title" : "Web development with node js",
//   "subtitle" : "leveraging the javascript stack",
//   "isbn" : "23242332123",
//   "author" : "Euthan Brown",
//   "publisher" : "22",
//   "date" : "2014-07-24T20:00:00.000Z",
//   "language" : "en",
//   "pages" : 102,
//   "category" : "web development",
//   "description" : "469 Bay Avenue, Bethany",
// });
//
// book.save();

// console.log(book);

// findOne and update

// Book.findOne()
//   .then(book => {
//     book.title = 'Foo'
//
//     book.save()
//   });

// Book.findOne()
//   .then(book => {
//     book.remove()
//   })