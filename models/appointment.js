const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: String,
    description: [{
        type: String
    }],
    place: String,
    
    },{ writeConcern: { w: 'majority', j: true, wtimeout: 1000 } })

module.exports = mongoose.model('Agenda', agendaSchema);