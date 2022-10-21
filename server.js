const express = require("express");


const app = express();

var PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/noteRoutes"))

app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});