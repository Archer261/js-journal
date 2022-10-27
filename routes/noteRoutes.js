const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const savedNotes = require('../db/db.json');

// Get all notes and render to page
router.get('/notes', (req, res) => {
    // console.log("test")
    res.json(savedNotes);
});

// Create note
router.post("/notes", (req, res) => {
    let newNoteIndex = savedNotes.length + 1
    let note = req.body;
    note["id"] = newNoteIndex
    savedNotes.push(note);
    res.json(note)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes))
    console.log(note)

});

// Delete note
router.delete("/notes/:id", (req, res) => {

})

function delNote(arr, value) {
    var i = 0;
    console.log("test delete")
    while (i < arr.length) {
        if (arr[i].id === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}
module.exports = router;