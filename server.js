const express = require("express");
const path = require("path");
const routes = require("./routes");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

//TODO: get notes to show up as buttons, pull from past data
//TODO: get data to make file - add to current JSON file
//TODO: make the delete function work

// link to npm package: https://www.npmjs.com/package/json-file-plus
