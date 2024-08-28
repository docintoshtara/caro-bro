const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const video = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    status: {
        default: '1',
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("video", video);