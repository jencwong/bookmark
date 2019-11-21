//==============================
//       DEPENDENCIES
//==============================
import React, { Component } from "react";
import FormNew from "./FormNew.js";
import FormUpdate from "./FormUpdate.js";
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
      bookmark: {},
      newform: true
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.getBookmark = this.getBookmark.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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
    this.toggleForm();
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    });
  }

  async deleteBookmark(id) {
    await axios.delete(`${baseURL}/bookmarks/${id}`);
    const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    });
    this.setState({
      bookmarks: filteredBookmarks
    });
  }

  toggleForm() {
    this.setState(state => ({
      newform: !state.newform
    }));
  }

  render() {
    return (
      <div className="container is-fluid has-background-grey-lighter">
        <h1 className="title is-1">The Most 棒 Bookmark Appy</h1>
        {this.state.newform ? (
          <FormNew handleAddBookmark={this.handleAddBookmark} />
        ) : (
          <FormUpdate
            bookmark={this.state.bookmark}
            getBookmarks={this.getBookmarks()}
          />
        )}
        {this.state.newform ? null : (
          <button className="button is-link" onClick={() => this.toggleForm()}>
            加 BOOKMARK
          </button>

          // <div
          //   // className="button is-link" comment out and change button to div so it does not render when clicked
          //   onClick={() => this.toggleForm()}
          // ></div>
        )}
        <h2 className="subtitle is-1">
          <strong>Bookmark List</strong>
        </h2>
        {this.state.bookmarks.map(bookmark => {
          return (
            <div key={bookmark._id}>
              <ul>
                <a href={bookmark.url}>
                  <li className="subtitle is-2">{bookmark.title}</li>
                </a>
                <div className="buttons is-centered are-normal">
                  <button
                    className="button is-warning"
                    onClick={() => this.getBookmark(bookmark)}
                  >
                    Edit啦
                  </button>
                  <button
                    className="button is-danger"
                    onClick={() => this.deleteBookmark(bookmark._id)}
                  >
                    删掉bye了
                  </button>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
