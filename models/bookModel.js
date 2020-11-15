const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  volumeInfo: {
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: String,
    imageLinks: {
      thumbnail: String,
    },
    infoLink: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
