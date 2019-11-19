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
      bookmarks: []
    };
    this.getBookmarks = this.getBookmarks.bind(this);
  }

  componentDidMount() {
    this.getBookmarks();
  }

  async getBookmarks() {
    const response = await axios(`${baseURL}/bookmarks`);
    const data = response.data;
    this.setState({
      bookmarks: data
    });
  }

  render() {
    return (
      <div>
        <h1>The Most 棒 Bookmark App</h1>
        <FormNew getBookmarks={this.getBookmarks} baseURL={baseURL} />
        <ul>
          {this.state.bookmarks.map(bookmark => {
            return (
              <a key={bookmark._id} href={bookmark.url}>
                <li>{bookmark.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
