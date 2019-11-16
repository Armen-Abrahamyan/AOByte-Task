const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    // id: Number,
    // teamId: Number,
    name: { type: String, unique: true },
    goals: Number,
    appearances: Number,
    tackle: Number
});

module.exports = mongoose.model('Player', PlayerSchema);
