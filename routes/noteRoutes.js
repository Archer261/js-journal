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
    let newNoteIndex = generateID(savedNotes)
    let note = req.body;
    note["id"] = newNoteIndex
    savedNotes.push(note);
    res.json(note)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes))
    console.log(note)

});

// Delete note
router.delete("/notes/:id", (req, res) => {
    let noteId = parseInt(req.params.id);
    for (let i = 0; i < savedNotes.length; i++) {
        if (noteId === savedNotes[i].id) {
            savedNotes.splice(i, 1);
            let noteJSON = JSON.stringify(savedNotes, null, 2);
            fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes))
        }
    }
    res.json(savedNotes);
})

// Function to generate a random id for new notes. Also validate that the ID does not match an existing ID
function generateID(arr) {
    let no = Math.floor(Math.random() * 90 + 10);
    arr.forEach((ele) => {
        if (Math.floor(Math.random() * 90 + 10) === ele.id) {
            no = Math.floor(Math.random() * 90 + 10);
        } else {
            return;
        }
    }); return no
}

// function delNote(arr, value) {
//     var i = 0;
//     console.log("test delete")
//     while (i < arr.length) {
//         if (arr[i].id === value) {
//             arr.splice(i, 1);
//         } else {
//             ++i;
//         }
//     }
//     return arr;
// }


module.exports = router;