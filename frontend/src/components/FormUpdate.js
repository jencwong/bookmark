import React, { Component } from "react";
import axios from "axios";
const baseURL = "http://localhost:3003";

class FormUpdate extends Component {
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
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  }

  componentDidMount() {
    this.setState({
      title: this.props.bookmark.title,
      url: this.props.bookmark.url
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
    this.props.handleAddBookmark(response);
  }

  render() {
    return (
      <div className="control">
        <h2>Edit Bookmark</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="title"></label>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            placeholder="title"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label className="label" htmlFor="url"></label>
          <input
            className="input"
            type="text"
            id="url"
            name="url"
            placeholder="url"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <input className="button is-link" type="submit" value="改 BOOKMARK" />
        </form>
      </div>
    );
  }
}

export default FormUpdate;
