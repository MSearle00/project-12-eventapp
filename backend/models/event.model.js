const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventname:{type: String, required: true},
    location:{type: String, required: true},
    info:{type: String, required:true},
    date: {type: Date, required: true},

}, {
    timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;