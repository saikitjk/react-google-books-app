import axios from "axios";
require("dotenv").config();

export default {
  getBooks: function (query) {
    return axios.get("/books", { params: { q: query } });
  },

  searchBooks: function (query) {
    //const bookToSearch = encodeURI( query );
    //const API_KEY = `${process.env.REACT_APP_API}`;
    const API_KEY = "AIzaSyAbUWVuhJrtQUvEPT7QJiS1cUe6OZSOyUI";
    console.log("This is api key " + API_KEY);
    console.log(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        query +
        "&key=" +
        API_KEY
    );
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        query +
        "&key=" +
        API_KEY
    );
  },

  getBookShelf: function () {
    return axios.get("/bookshelf");
  },

  saveBookShelf: function (bookData) {
    return axios.post("/bookshelf", bookData);
  },

  deleteBooks: function (id) {
    return axios.delete(`/bookshelf/${id}`);
  },
};
