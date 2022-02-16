//EXPRESSJS

//Require express library that was downloaded
const express = require("express")


//set up the server with app variable calling express as a function
const app = express()

//Require teamService
const teamService = require('./services/teamService')

//for assigning ejs
app.set('view engine', 'ejs')

//set up routes ("/" - root path)
app.get("/", (req, res) => {

    //renders the index.html file
    res.render("index", { text: "Your Life will surely change"})

})

//post route to post to the database
app.post('/', (req, res) => {
    res.status(200)
    const { name } = req.body;
    console.log(req.body.name)

    if (req.body.name) {
        res.render('team', { message: "Successfully posted new team"});
    } else {
        res.render('team');
    }
})

//make servern run pass through port #
app.listen(3000)

//MONGODB

// // load module driver
// const mongodb = require('mongodb');

// // create a client instance using mongo db driver
// const MongoClient = mongodb.MongoClient;

// // pulling the address of the server needed connection
//     // uses mangodb protocol to communicate w/ server
// const connectionStr = 'mongodb://localhost:27017';

// // make a new client new instance to connect to db server
// const client = new MongoClient(connectionStr);

// // using client connect to server
// // takes a function
// client.connect(function(err) {
    
//     // error handle
//     if (err) { throw new Error(err) }

//     // select the particular data base (container for the tables goes here)
//         //in this case it's nbadb where the 'teams' collection is housed
//     const db = client.db('nbadb');

//     // select the particular collection in the data base
//     const teams = db.collection('teams');

//     teams.find({}).toArray((err, allData) => {
//         console.log(allData)
//     })

// })

//MONGOOSE

// load the mongoose module
const mongoose = require('mongoose');

// connect to the database(BASIC)
// mongoose.connect('mongodb://localhost:27017/nba2db');

// " in a more advanced way
    //create connectionStr
const connectionStr = "mongodb://localhost:27017/nba3db"
// connect to the database
mongoose.connect(connectionStr).then(() => {
    console.log('Database Connected')
})

// create the schema
    //for more teams
let teamSchema = mongoose.Schema({
    name: String,
    location: String,
    yearformed: String,
})

// creating the model. a controller for collection inside the database
let TeamModel = mongoose.model("Team", teamSchema)

//instantiate the model
// let team5 = new TeamModel({name: "trailblazers", location: "portland", yearformed: "1979"})
// let team6 = new TeamModel({name: "pistons", location: "detroit", yearformed: "1941"})
// let team7 = new TeamModel({name: "lakers", location: "los angeles", yearformed: "1965"})


//NOW save the data (instantiations)
// team5.save(function(err, team) {
//     if (err) { return console.error(err) }
//     console.log(team.name + " saved to nba2 teams")
// });

// team6.save(function(err, team) {
//     if (err) { return console.error(err) }
//     console.log(team.name + " saved to nba2 teams")
// });

// team7.save(function(err, team) {
//     if (err) { return console.error(err) }
//     console.log(team.name + " saved to nba2 teams")
// });

// use model to find and read data
// TeamModel.find({ name: "pistons" }).then(teams => {
//     console.log(teams)
// });
// TeamModel.find({ name: "bulls" }).then(teams => {
//     console.log(teams)
// });
// TeamModel.find({ name: "trailblazers" }).then(teams => {
//     console.log(teams)
// });

