const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController.js");
const db = require("../models/bookModel.js");

// router
//   .route("/books")
//   .get(booksController.findAll)
//   .post(booksController.create);
// console.log("/books hit");

// Matches with "/api/books"
router
  .route("/bookshelf")
  .get(booksController.findAll)
  .post(booksController.create);
console.log("/bookshelf hit");

// Matches with "/api/books/:id"
router
  .route("/bookshelf/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

console.log("/bookshelf/:id hit");

module.exports = router;
