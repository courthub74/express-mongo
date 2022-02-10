const Team = require('../models/Team')

//CREATE FUNCTION
async function create(data) {
    //let team = new Team({name:data.name, description:data.description})
    let team = new Team(data)

    //save data use instance
    return await team.save().then(result => {
        console.log('Team Saved!')
    })
}

//GET ALL FUNCTION
async function getAll() {
    //read data use the module
    return await Team.find({}).lean();
}