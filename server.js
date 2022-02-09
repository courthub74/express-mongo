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