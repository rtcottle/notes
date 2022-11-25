const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => res.json(`GET route`));
app.post("/", (req, res) => res.json(`POST route`));
app.delete("/:id", (req, res) => res.json(`DELETE route`));

app.listen(PORT, () => console.log(`Listening for requests on port ${PORT}!`));

//TODO: make a routes folder with an HTML and Notes section -- these know how to connect with each page
//TODO: make a utility function that knows how to read and write to the db.json file
//TODO: make utils folder and connect it with the routes sections
//TODO: make the delete function work
//TODO:
