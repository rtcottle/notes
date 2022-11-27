const express = require("express");
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

//TODO: make a routes folder with an HTML and Notes section -- these know how to connect with each page
//TODO: make a utility function that knows how to read and write to the db.json file
//TODO: make utils folder and connect it with the routes sections
//TODO: make the delete function work
//TODO:
