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

  handleSave = (
    event,
    id,
    title,
    authors,
    description,
    infoLink,
    thumbnail
  ) => {
    event.preventDefault();
    API.saveBookShelf({
      id,
      title,
      authors,
      description,
      infoLink,
      thumbnail,
    }).then((res) => this.loadBookShelf());
  };

  render() {
    return (
      <div className="container booklist_container">
        <div className="row">
          <div className="col">
            <h4>Book Search</h4>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="bookSearch"
                  name="bookSearch"
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange}
                />

                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.handleFormSubmit}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
