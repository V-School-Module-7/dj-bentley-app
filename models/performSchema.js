const mongoose = require('mongoose')
const Schema = mongoose.Schema

const performSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    display: {
        type: String,
        enum: ["true", "false"],
        default: "true"
    }
})

module.exports = mongoose.model("Perform", performSchema)