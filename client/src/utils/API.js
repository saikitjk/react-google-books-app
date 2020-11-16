import axios from "axios";

export default {
  getBooks: function (query) {
    return axios.get("/api/books", { params: { q: query } });
  },

  getBookShelf: function () {
    return axios.get("/api/bookshelf");
  },

  saveBookShelf: function (bookData) {
    return axios.post("/api/bookshelf", bookData);
  },

  deleteBooks: function (id) {
    return axios.delete(`/api/bookshelf/${id}`);
  },
};
