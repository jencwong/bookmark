const express = require("express");
const bookmarks = express.Router();
const Bookmark = require("../models/bookmarks.js");

// get routes to show all bookmarks
bookmarks.get("/", (req, res) => {
  Bookmark.find({}, (err, foundBookmarks) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundBookmarks);
  });
});

// post route to create a new bookmark
bookmarks.post("/", (req, res) => {
  //   res.send(req);
  Bookmark.create(req.body, (error, createdBookmark) => {
    if (error) {
      res.status(400).json({
        error: error.message
      });
    } else {
      res.status(200).send(createdBookmark);
    }
  });
});

module.exports = bookmarks;
