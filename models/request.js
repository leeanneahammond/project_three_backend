const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
        name: String,
        email: String,
        state: String,
        city: String,
        severity: String,
        request: String,
        support: Number,
},{timestamps: true})

module.exports = mongoose.model("Request", requestSchema);