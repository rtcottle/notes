const router = require("express").Router();
const uuid = require("../utils/uuid");
var jsonFile = require("json-file-plus");
var path = require("path");
var filename = path.join(process.cwd(), "package.json");
var callback = function (err, result) {
  /* your code here */
};

jsonFile(filename, function (err, file) {
  if (err) {
    return doSomethingWithError(err);
  }

  file.get(); // get entire data. returns a Promise
  file.get(callback); // get entire data. calls the errorback

  /* pass any plain object into "set" to merge in a deep copy */
  /* please note: references will be broken. */
  /* if a non-plain object is passed, will throw a TypeError. */
  file.set({
    title,
    content,
    note_id: uuid(),
  });

  /* Save the file, preserving formatting. */
  /* Errorback will be passed to fs.writeFile */
  /* Returns a Promise. */
  file
    .save(callback)
    .then(function () {
      console.log("success!");
    })
    .catch(function (err) {
      console.log("error!", err);
    });
});

// GET routes for notes page
// router.get("/", (req, res) => {
//   readFromFile(".././db/db.json").then((data) => res.json(JSON.parse(data)));
// });

// POST Route for a new note
// router.post("/", (req, res) => {
//   console.info(`${req.method} request received to post new note`);

//   const { title, content } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       content,
//       note_id: uuid(),
//     };

//     readAndAppend(newNote, "./db/db.json");
//     res.json(`Note added successfully`);
//   } else {
//     res.error("Error in adding note");
//   }
// });

module.exports = router;
