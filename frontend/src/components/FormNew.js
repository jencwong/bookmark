import React, { Component } from "react";

class FormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    };
  }
  render() {
    return (
      <div>
        <h2>New Bookmark</h2>
        <form>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleChange}
          />
          <label htmlFor="url"></label>
          <input
            type="text"
            id="url"
            name="url"
            value={this.state.url}
            placeholder="url"
            onChange={this.handleChange}
          />
          <input type="submit" value="ADD BOOKMARK" />
        </form>
      </div>
    );
  }
}
