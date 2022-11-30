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

// PUT route to update notes

module.exports = router;
