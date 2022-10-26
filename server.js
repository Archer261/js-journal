const express = require('express');
const path = require('path');
const htmlRoutes = require("./routes/htmlRoutes")
const noteRoutes = require("./routes/noteRoutes")
const PORT = process.env.port || 3001;

// Create instance of express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Go to routes folder
app.use("/", htmlRoutes)
app.use("/api", noteRoutes);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);