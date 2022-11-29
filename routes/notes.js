const router = require("express").Router();

// GET routes for notes page
router.get("/", (req, res) => {
  readFromFile(".././db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
router.post("/", (req, res) => {
  console.info(`${req.method} request received to post new note`);

  const { title, content } = req.body;

  if (req.body) {
    const newNote = {
      title,
      content,
      note_id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully`);
  } else {
    res.error("Error in adding note");
  }
});

module.exports = router;
