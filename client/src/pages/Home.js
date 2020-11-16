import React, { Component } from "react";
//import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    bookSearch: "",
    bookShelf: [],
    screenWidth: window.innerWidth,
    searched: "",
  };

  checkSaved = (id) => {
    for (let i in this.state.bookShelf) {
      if (this.state.bookShelf[i].id === id) return true;
    }
    return false;
  };
  loadBookShelf = () => {
    API.getBookShelf().then((res) => {
      this.setState({ bookShelf: res.data });
    });
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searched: this.state.bookSearch,
      bookSearch: "",
    });
    API.getBooks(this.state.bookSearch)
      .then((res) =>
        this.setState({ books: res.data }, () => console.log(res.data))
      )
      .catch((err) => console.log(err));
  };

  deleteBooks = (event, id) => {
    event.preventDefault();
    API.deleteBooks(id)
      .then((res) => this.loadBookShelf())
      .catch((err) => console.log(err));
  };

  render() {
    return <div className="container booklist_container"></div>;
  }
}

export default Home;
