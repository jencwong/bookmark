//==============================
//     DEPENDENCIES
//==============================
// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// DEPENDENCY CONFIGURATIONS
const app = express();
const PORT = 3003;

//==============================
//     MONGOOSE CONNECTION
//==============================
// ERROR
mongoose.connection.on("error", err => {
  console.log(err.message + " MongoDB broke");
});
// DISCONNECTED
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
// CONNECT
mongoose.connect("mongodb://localhost:27017/bookmarks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
// CONNECTED
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

const whitelist = "http://localhost:3000";

const corsOptions = {
  origin: (origin, callback) => {
    // if (whitelist.indexOf(origin) !== -1) { temporary solution by Joem don't change CORS is still blocking
    if (true) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

//==============================
//     MIDDLEWARE
//==============================
app.use(express.json());
app.use(cors(corsOptions));

//==============================
//     CONTROLLER CONFIGURATION
//==============================

const bookmarksController = require("./controllers/bookmarks.js");
app.use("/bookmarks", bookmarksController);
// CONTROLLERS

//==============================
//      LISTEN
//==============================
app.listen(PORT, () => {
  console.log(PORT, " listening...");
});
