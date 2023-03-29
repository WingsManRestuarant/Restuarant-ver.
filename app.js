const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// set the serving static files in the express in a directory named public
app.use(express.static("public"));

// use bodyParser for URL encoding
app.use(bodyParser.urlencoded({ extended: true }));


// root page for login
app.get('/', function (req, res) {
    res.render('login');
});

app.get('/order', function (req, res) {
    res.render('order');
});

app.get('/kanban', function (req, res) {
    res.render('kanban');
});

app.get('/select', function (req, res) {
    res.render('select');
});

app.get('/queue', function (req, res) {
    res.render('queue');
});

app.get('/cooking', function (req, res) {
    res.render('cooking');
});

app.get('/delivery', function (req, res) {
    res.render('delivery');
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});