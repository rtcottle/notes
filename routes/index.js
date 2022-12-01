const path = require("path");
const router = require("express").Router();

const html = require("./html");
const notes = require("./notes");

router.use("/", html);
router.use("/api/notes", notes);

// GET Route for all other pages
router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;
