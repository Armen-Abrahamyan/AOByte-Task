const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
    // id: Number,
    name: { type: String, unique: true }
}, { writeConcern: {
    w: 'majority',
        j: true,
        wtimeout: 1000
}});

module.exports = mongoose.model('League', LeagueSchema);
