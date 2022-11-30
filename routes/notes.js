const router = require("express").Router();
const uuid = require("../utils/uuid");
const { readFromFile, readAndAppend } = require("../utils/fsUtils");

// GET routes for notes page
router.get("/", (req, res) => {
  console.info(`${req.method} request received to get notes`);
  readFromFile("./db/db.json").then((data) => {
    res.json(JSON.parse(data));
  });
});

// POST Route for a new note
router.post("/", (req, res) => {
  console.info(`${req.method} request received to post new note`);

  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };
    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully`);
  } else {
    res.error("Error in adding note");
  }
});

// DELETE route to delete notes
router.delete("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.info(`${req.method} request received to get notes`);
  readFromFile("./db/db.json").then((data) => {
    const notes = JSON.parse(data);
    const result = notes.filter((note) => note.note_id != id);
    console.log(result);
    //TODO: work on this. Should be a similar pattern to the readAndAppend to make a new file.
    // readAndAppend(newNote, "./db/db.json");
    console.log(newNote);
    // res.end()
    // TODO: what is the client expecting back from server? Look at the front end stuff to determine this.
  });
});

module.exports = router;
