//Require express library that was downloaded
const mongoose = require("mongoose");

//Team

//1-schema
//2-create model

//name
//location
//yearformed


//SCHEMA
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    yearformed: { type: String, required: true },
})
