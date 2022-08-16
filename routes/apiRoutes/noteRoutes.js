
const router = require("express").Router();
const  notes  = require("../../db/db.json");
const { validateNote, createNewNote } = require("../../lib/notes");

router.post("/notes", (req, res) => {
    // req.body.id = Nanoid???;
if(!validateNote(req.body)) {
    res.status(400).send("Your note is improperly formatted.");
} else {
    const note = createNewNote(req.body, notes);
    res.json(note);
}
});

module.exports = router