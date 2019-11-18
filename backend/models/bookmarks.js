const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
  title: { type: String, required: true },
  link: { url: String, required: true }
});

module.exports = mongoose.moddel("Bookmark", bookmarkSchema);
