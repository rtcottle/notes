const path = require("path");
const router = require("express").Router();

const html = require("./html");
const notes = require("./notes");

// GET Route for homepage
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

// GET Route for notes page
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

router.use("/api/home", html);
router.use("/api/notes", notes);

module.exports = router;
