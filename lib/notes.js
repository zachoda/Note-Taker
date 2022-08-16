const fs = require("fs");
const path = require("path");
const  notes  = require("../db/db.json");

function createNewNote(body) {
    console.log(notes.note);
    const newNote = body;
    const noteList = notes.note;
    noteList.push(newNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify({note: noteList}, null, 2));
    return newNote;
};



function validateNote(note) {
    if(!note.title || typeof note.title !== "string") {
        return false;
    }
    if(!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
};


module.exports = {
    validateNote,
    createNewNote
};