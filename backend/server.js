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

//==============================
//     CONTROLLER CONFIGURATION
//==============================
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      ballback(new Error("Not allowed by CORS"));
    }
  }
};

//==============================
//     MIDDLEWARE
//==============================
app.use(express.json());
app.use(cors(corsOptions));
// CONTROLLERS

//==============================
//      LISTEN
//==============================
app.listen(PORT, () => {
  console.log(PORT, " listening...");
});
