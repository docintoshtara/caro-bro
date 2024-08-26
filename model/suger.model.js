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
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        // match: /^(\+\d{1,3}[- ]?)?\d{10}$/
    },
    onoff: {
        default: '1',
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("caroBroBackend", suger);