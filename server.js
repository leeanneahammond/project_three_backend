require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || process.env.LOCALPORT;
const cors = require('cors');
// const usersController = require("./controllers/users.js");

//MONGO/MONGOOSE CONNECTION
//...farther down the page
// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))

mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

//...farther down the page
mongoose.connect('mongodb://localhost:27017/requests', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
});


const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


// middleware
app.use(express.json());
app.use(cors());
// app.use("/users", usersController);






app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


