const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
    // id: Number,
    name: { type: String, unique: true }
});

module.exports = mongoose.model('League', LeagueSchema);
