const express = require('express');
const router = express.Router();
const path = require("path");

const app = express();

app.get('/notes', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/notes.html"));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

module.exports = router;