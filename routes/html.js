const path = require("path");
const router = require("express").Router();

// GET routes for home page
// router.get("/", (req, res) => {
//   readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
// });

// GET Route for homepage
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

// GET Route for notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// // GET Route for all other pages
// router.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../public/index.html"))
// );

module.exports = router;
