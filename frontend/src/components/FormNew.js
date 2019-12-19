import React, { Component } from "react";
import axios from "axios";

let baseURL = "https://bookmark-app-by-jj.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class FormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${baseURL}/bookmarks`, {
      title: this.state.title,
      url: this.state.url
    });
    this.setState({
      title: "",
      url: ""
    });
    this.props.handleAddBookmark(response.data);
  }

  render() {
    return (
      <div className="control">
        <h2 className="subtitle is-3">
          <strong>New Bookmark</strong>
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label" htmlFor="title"></label>

                <input
                  className="input is-medium is-info"
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="title"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="url"></label>
                <input
                  className="input is-medium is-info"
                  name="url"
                  placeholder="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="buttons is-centered are-medium">
            <input
              className="button is-link"
              type="submit"
              value="加 BOOKMARK"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FormNew;
