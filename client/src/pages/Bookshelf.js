import React, { Component } from "react";

import BookList from "../components/BookList";
import API from "../utils/API";

class Bookshelf extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    this.getBookShelf();
  }

  getBookShelf = () => {
    API.getBookShelf()
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
  };

  deleteBook = (bookId) => {
    if (bookId) {
      API.deleteBooks(bookId)
        .then((res) => {
          this.getSavedBooks();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row center">
          <BookList
            books={this.state.books}
            identifier="bookshelf"
            onDelete={this.deleteBook}
          />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
