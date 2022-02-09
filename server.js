//EXPRESSJS

//Require express library that was downloaded
const express = require("express")

//set up the server with app variable calling express as a function
const app = express()

//for assigning ejs
app.set('view engine', 'ejs')

//set up routes ("/" - root path)
app.get("/", (req, res) => {

    //renders the index.html file
    res.render("index", { text: "Your Life will surely change"})

})

//make servern run pass through port #
app.listen(3000)

//MONGODB

// load module driver
const mongodb = require('mongodb');

// create a client instance using mongo db driver
const MongoClient = mongodb.MongoClient;

// pulling the address of the server needed connection
    // uses mangodb protocol to communicate w/ server
const connectionStr = 'mongodb://localhost:27017';

// make a new client new instance to connect to db server
const client = new MongoClient(connectionStr);

// using client connect to server
// takes a function
client.connect(function(err) {
    
    // error handle
    if (err) { throw new Error(err) }

    // select the particular data base (container for the tables goes here)
        //in this case it's nbadb where the 'teams' collection is housed
    const db = client.db('nbadb');

    // select the particular collection in the data base
    const teams = db.collection('teams');

    teams.find({}).toArray((err, allData) => {
        console.log(allData)
    })

})