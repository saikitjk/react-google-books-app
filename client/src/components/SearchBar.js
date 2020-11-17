import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    query: "",
  };

  handleOnChange = (event) => {
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
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="input_text"
                type="text"
                data-length="80"
                name="query"
                onChange={this.handleChange}
                value={this.state.query}
              />
              <label htmlFor="input_text">Search:</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
