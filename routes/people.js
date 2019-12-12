const express = require("express");
const router = express.Router();
// var request = require('request');

const mysqlConnection = require("../connection");
// const querystring = require('querystring');

// working http://localhost:3000/people
router.get("/", (req, res) => {

    debugger;
    mysqlConnection.query("select * from people", (err, rows, field) => {
        if (!err) {
            console.log("rows " + rows);
            res.send(rows);
        }
        else {
            console.log("Error: " + err);
        }
    })
})

// testing post service
// let people = { people: [{ name: "Arqam" }] }

router.post("/", function (req, res) {


    const query = "insert into `people` (name, age) values (" + req.body.name + ",  " + req.body.age + ")";
console.log( "  sa " +req.body[0].key)
    console.log("req.body.name: " + req.body.name)
    console.log(" req.body.age: "+ req.body.age)

    // console.log("req.body: " + req.body)
    // console.log("req.body[]: " + req.body[0])

    mysqlConnection.query("" + query, (err, rows, field) => {
        if (!err) {

            console.log("rows " + rows[0]);
            res.send(rows);
        }
        else {
            console.log("Error: " + err);
        }
    })





    
    // console.log("console.log " + req.body.name);
    // people.people.push({ name: req.body.name })
    // res.json(people);
    // res.end();
});



// work only postmen (body) http://localhost:3000/people
// let people = { people: [{ name: "Arqam" }] }

// router.post("/", function (req, res) {

//     console.log("console.log " + req.body.name);
//     people.people.push({ name: req.body.name })
//     res.json(people);
//     res.end();
// });

module.exports = router;