import React, { Component } from "react";
import BookList from "../components/BookList";
import BookListItem from "../components/BookListItem";
import searchBar from "../components/SearchBar";
import API from "../utils/API";

class Home extends Component {
  state = {
    bookResults: [],
    message: "",
  };

  getBooks = (query) => {
    if (query) {
      API.searchBooks(query)
        .then((res) => {
          res.data.items.map((book, index) => {
            book.saved = false;
          });
          console.log(res.data);
          this.setState({ bookResults: res.data.items });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ message: err });
        });
    }
  };

  saveBookShelf = (targetBook, bookIndex) => {
    console.log("Button clicked :" + JSON.stringify(targetBook, "", 2));
    if (targetBook) {
      const newBook = {
        volumeInfo: {
          title: targetBook.volumeInfo.title,
          authors: targetBook.volumeInfo.authors,
          description: targetBook.volumeInfo.description,
          imageLinks: {
            thumbnail: targetBook.volumeInfo.imageLinks.thumbnail,
          },
          infoLink: targetBook.volumeInfo.infoLink,
        },
      };

      console.log("Book to save: " + JSON.stringify(newBook, "", 2));
      API.saveBookShelf(newBook)
        .then((res) => {
          targetBook.saved = true;
          let newBookResults = this.state.bookResults.map((book, index) =>
            index === bookIndex ? targetBook : book
          );
          this.setState({ bookResults: newBookResults });
          console.log("Book saved: " + res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="container booklist_container">
        <div className="row searchRow">
          <div className="col searchCol">
            <h4>Book Search</h4>
            <searchBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
