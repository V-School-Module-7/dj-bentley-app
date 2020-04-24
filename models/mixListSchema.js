const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mixListSchema = new Schema({
    url: {
        required: true,
        type: String
    },
    imgUrl: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("MixList", mixListSchema)