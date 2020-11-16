import React, { Component } from "react";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    bookSearch: "",
    bookShelf: [],
    screenWidth: window.innerWidth,
    searched: "",
  };

  render() {
    return <div className="container booklist_container"></div>;
  }
}

export default Home;
