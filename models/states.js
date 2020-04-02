const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StatesSchema = new Schema ({
    name: {type: String, required: true},

})

module.exports = mongoose.model('States', StatesSchema);