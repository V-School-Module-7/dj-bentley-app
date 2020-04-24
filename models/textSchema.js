const mongoose = require("mongoose")
const Schema = mongoose.Schema

const textSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    textType: {
        enum: ["openText", "aboutText"], //can be any spots you add text
        type: String, 
        default: "aboutText"
    }
})

module.exports = mongoose.model("Text", textSchema)