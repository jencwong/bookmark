const mongoose = require("mongoose");
const BookmarkModel = require("./bookmarks.js");

const seedBookmarks = [
  {
    title: "Medium",
    url: "https://medium.com/"
  },
  {
    title: "Flavio",
    url: "https://flaviocopes.com/"
  },
  {
    title: "MDN",
    url: "https://developer.mozilla.org/en-US/"
  },
  {
    title: "Stack-Overflow",
    url: "https://stackoverflow.com/"
  }
];

// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = "bookmarks";
  const dbURI = `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;

  dbConnection.on("error", err => console.log("DB Connection Error: ", err));
  dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));
  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
    console.log(`${dbName} db running on ${dbURI}`)
  );
  BookmarkModel.collection.drop();

  BookmarkModel.create(seedBookmarks, (err, newBookmarks) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newBookmarks);
    }
    dbConnection.close();
  });
};

seedDB();

module.exports = seedBookmarks;
