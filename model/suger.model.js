const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const suger = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    hh: {
        type: String,
        required: true,
    },
    mm: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("caroBroBackend", suger);