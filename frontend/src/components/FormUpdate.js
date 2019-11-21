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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.setState({
      title: this.props.bookmark.title,
      url: this.props.bookmark.url
    });
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      console.log("Update Submitted");
      const bookmarkId = this.props.bookmark._id;
      const url = `${baseURL}/bookmarks/${bookmarkId}`;
      const payload = {
        title: this.state.title,
        url: this.state.url
      };
      const updatedBookmark = await axios.put(url, payload);
      console.log("PUT: ", updatedBookmark);
      this.getBookmarks();
      this.setState({
        title: "",
        url: ""
      });
    } catch (err) {
      console.log("Update Error: ", err);
    }
  }

  render() {
    return (
      <div className="control">
        <h2 className="subtitle is-3">
          <strong>Edit Bookmark</strong>
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label" htmlFor="title"></label>

                <input
                  className="input is-medium is-primary"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="url"></label>
                <input
                  className="input is-medium is-primary"
                  type="text"
                  id="url"
                  name="url"
                  value={this.state.url}
                  placeholder="url"
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
              value="改 BOOKMARK"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FormUpdate;
