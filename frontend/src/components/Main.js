import React, { Component } from "react";
import FormNew from "./FormNew.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
  }
  render() {
    return (
      <div>
        <h1>The Most 棒 Bookmark App</h1>
        <FormNew />
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
