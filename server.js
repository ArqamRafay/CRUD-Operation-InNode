
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());


app.use("/people/:name", PeopleRoutes);


app.listen(3000);
