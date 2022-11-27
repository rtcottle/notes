const router = require("express").Router();

// GET routes for home page
router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});



module.exports = router;
