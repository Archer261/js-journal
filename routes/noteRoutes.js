const express = require('express');
const fs = require('fs');
const router = express.Router();

const app = express();


// const file = fs.readFileSync('./db/db.json')
// fs.writeFileSync("./db/db.json", JSON.stringify([data]))


app.get('/api/notes', (req, res) => {
    req.json("../db/db.json");
});


// app.post('/api/notes', (req, res) => {
//     fs.readFileSync(req.body).then(data => {
//         return JSON.parse(data)
//     }).then((j) => {
//         fs.appendFileSync('./db/db.json', JSON.stringify(j));
//     })
// })

module.exports = router;