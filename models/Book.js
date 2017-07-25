var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	relaseDate: String
});



//this is referencing our database collection 'Book'...which can also be referenced as 'books'
var Book = mongoose.model('Book', BookSchema);


module.exports = Book;