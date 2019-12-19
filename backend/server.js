//==============================
//     DEPENDENCIES
//==============================
// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// DEPENDENCY CONFIGURATIONS
const app = express();
const PORT = process.env.PORT || 3003;
const mongodbURI =
  process.env.MONGODB_URL || "mongodb://localhost:27017/bookmarks";

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
mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
// CONNECTED
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

//==============================
//      CONFIGURATION
//==============================
const bookmarksController = require("./controllers/bookmarks.js");
const whitelist = [
  "http://localhost:3000",
  "https://bookmark-app-by-jj.surge.sh",
  "http://bookmark-app-by-jj.surge.sh"
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));
// CONTROLLERS
app.use("/bookmarks", bookmarksController);

//==============================
//          LISTEN
//==============================
app.listen(PORT, () => {
  console.log(PORT, " listening...");
});
