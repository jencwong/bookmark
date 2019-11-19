import React, { Component } from "react";

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
      </div>
    );
  }
}

export default Main;
