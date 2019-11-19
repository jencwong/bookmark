//==============================
//       DEPENDENCIES
//==============================
const express = require("express");
const bookmarks = express.Router();
const Bookmark = require("../models/bookmarks.js");

//==============================
//          ROUTES
//==============================
// INDEX - SHOW ALL BOOKMARKS
bookmarks.get("/", (req, res) => {
  Bookmark.find({}, (err, foundBookmarks) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    }
    res.status(200).json(foundBookmarks);
  });
});

// POST - CREATE NEW BOOKMARK
bookmarks.post("/", (req, res) => {
  //   res.send(req);
  Bookmark.create(req.body, (err, createdBookmark) => {
    if (err) {
      res.status(400).json({
        error: err.message
      });
    } else {
      res.status(200).send(createdBookmark);
    }
  });
});

// UPDATE - EDIT ONE BOOKMARK
bookmarks.put("/:id", (req, res) => {
  Bookmark.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBookmark) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedBookmark);
    }
  );
});

// DELETE - REMOVE ONE BOOKMARK
bookmarks.delete("/:id", (req, res) => {
  Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedBookmark);
  });
});

module.exports = bookmarks;
