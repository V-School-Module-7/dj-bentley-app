const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventDate: {
        type: Date,
        required: true
    },
    contactInfo: {
        name: String,
        phoneNum: String,
        email: String,
        required: true
    },
    eventDetails: {
        location: String,
        description: String,
        required: true
    }
})

module.exports = mongoose.model("event", eventSchema)