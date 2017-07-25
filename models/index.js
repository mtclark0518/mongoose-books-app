var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");











module.exports.Book = require('./Book.js');