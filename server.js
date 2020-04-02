const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const state = express.Router();
const PORT = 4000;
// middleware
app.use(cors());
app.use(bodyParser.json());
// app.use('/state, stateRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/requests', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


