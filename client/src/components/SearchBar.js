import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with" + this.state.query);
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={this.handleSubmit}
              >
                Search
              </button>
            </div>
            <input
              name="query"
              onChange={this.handleChange}
              value={this.state.query}
              type="text"
              class="form-control"
              placeholder=""
              aria-label=""
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
