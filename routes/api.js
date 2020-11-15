const axios = require("axios");
const router = require("express").Router();
const bookController = require("../controllers/booksController");
const db = require("../models/bookModel");

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { parms: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch((err) => res.status(400).json(err));
});

// Matches with "/api/books"
router
  .route("/bookShelf")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/bookShelf/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
