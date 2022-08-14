const express = require("express");
const app = express();
const { notes } = require("../../Develop/db/db.json");

app.post("./notes", (req, res) => {
    // req.body.id = Nanoid???;
if(!validateNote(req.body)) {
    res.status(400).send("Your note is improperly formatted.");
} else {
    const note = createNewNote(req.body, notes);
    res.json(note);
}
});