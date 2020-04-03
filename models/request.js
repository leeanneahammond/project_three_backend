const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
        name: {type: String, required: true },
        email: String,
        state: String,
        city: String,
        severity: String,
        request: String,
        support: Number,
})

module.exports = mongoose.model("Request", requestSchema);