const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.get('/', function (req, res) {
    res.send('hello world')
  });

// GET route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  });




// POST route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});