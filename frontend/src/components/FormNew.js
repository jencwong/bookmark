import React, { Component } from "react";

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

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      title: "",
      url: ""
    });
    this.props.getBookmarks();
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <h2>New Bookmark</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label htmlFor="url"></label>
          <input
            type="text"
            id="url"
            name="url"
            value={this.state.url}
            placeholder="url"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <input type="submit" value="ADD BOOKMARK" />
        </form>
      </div>
    );
  }
}

export default FormNew;
