//==============================
//       DEPENDENCIES
//==============================
import React, { Component } from "react";
import FormNew from "./FormNew.js";
import axios from "axios";

const baseURL = "http://localhost:3003";

//==============================
//        COMPONENTS
//==============================

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      bookmark: {}
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.getBookmark = this.getBookmark.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
  }

  componentDidMount() {
    this.getBookmarks();
  }

  async getBookmarks() {
    const response = await axios(`${baseURL}/bookmarks`);
    const bookmarks = response.data;
    this.setState({
      bookmarks: bookmarks
    });
  }

  getBookmark(bookmark) {
    this.setState({ bookmark: bookmark });
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    });
  }

  render() {
    return (
      <div className="container is-fluid has-background-grey-lighter">
        <h1 className="title is-1">The Most 棒 Bookmark Appy</h1>
        <FormNew handleAddBookmark={this.handleAddBookmark} />
        <ul>
          {this.state.bookmarks.map(bookmark => {
            return (
              <a key={bookmark._id} href={bookmark.url}>
                <li class="subtitle is-2">
                  {bookmark.title}
                  <button className="button is-link">删掉bye了</button>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
