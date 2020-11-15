const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");
const db = require("../models/bookModel");

router.get("/books", (req, res) => {
  console.log("/books hit");
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { parms: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch((err) => res.status(400).json(err));
});

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
