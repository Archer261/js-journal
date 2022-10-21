const express = require('express');
const fs = require('fs');
const router = express.Router();

const app = express();


// const file = fs.readFileSync('./db/db.json')
// fs.writeFileSync("./db/db.json", JSON.stringify([data]))


app.get('/api/notes', (req, res) => {
    res.readFile('./db/db.json').then((db) =>
        res.send('notes.html'));
})

// app.post('/api/notes', (req, res) => {

// })

module.exports = router;