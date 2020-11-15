const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  infoLink: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = Book = mongoose.model("Book", bookSchema);
