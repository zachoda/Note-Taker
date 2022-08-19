const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  console.log("HIT");
  fs.readFile("../../db/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.parse(data));
      const oldNotes = JSON.parse(data);
      res.JSON(oldNotes);
    }
  });
});

router.post("/notes", (req, res) => {
  const newNote = { title: req.body.title, text: req.body.text };
  const noteList = JSON.parse(
    fs.readFileSync("../../db/db.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const noteList = [];
        const oldNotes = JSON.parse(data);
        noteList.push(newNote, oldNotes);
      }
    })
  );
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteList, null, 2)
  );
  res.json(noteList);
});

module.exports = router;
