const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
        name: {type: String, required: true },
        email: {type: String, required: true },
        state: {type: String, required: true },
        city: {type: String, required: true },
        severity: String,
        request: {type: String, required: true },
        support: Number,
})

module.exports = mongoose.model("Request", requestSchema);