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
    let note = req.body;
    savedNotes.push(note);
    res.json(savedNotes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(savedNotes))
});

// Delete note
router.delete("/notes/:id", (req, res) => {
    let noteId = req.params.id
    console.log(req.params.id)
    noteList.find(notes => notes.id === id)

})

// app.post('/api/notes', (req, res) => {
//     fs.readFileSync(req.body).then(data => {
//         return JSON.parse(data)
//     }).then((j) => {
//         fs.appendFileSync('./db/db.json', JSON.stringify(j));
//     })
// })

module.exports = router;