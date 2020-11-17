import axios from "axios";

export default {
  getBooks: function (query) {
    return axios.get("/books", { params: { q: query } });
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
