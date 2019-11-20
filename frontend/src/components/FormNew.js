import React, { Component } from "react";
import axios from "axios";
const baseURL = "http://localhost:3003";

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
        <h2>New Bookmark</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="title"></label>
          <input
            className="input"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label className="label" htmlFor="url"></label>
          <input
            className="input"
            name="url"
            placeholder="url"
            value={this.state.url}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <input className="button is-link" type="submit" value="加 BOOKMARK" />
        </form>
      </div>
    );
  }
}

export default FormNew;
