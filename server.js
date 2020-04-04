require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || process.env.LOCALPORT;
const cors = require('cors');
const Request = require("./models/request.js")
// var bodyParser = require('body-parser');

// const usersController = require("./controllers/users.js");


const requestsController = require("./controllers/requests.js");
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


// middleware
app.use(express.json());
// app.use(bodyParser.json());
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

app.use(cors());
// app.use("/users", usersController);
app.use("/requests", requestsController);




app.get("/seed", (req, res) => {
  Request.create([
    {
      name:"Chris",
      email:"test@gmail.com",
      state:"New York",
      city:"New York",
      severity:"High",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"Phi",
      email:"test@gmail.com",
      state:"Rhode Island",
      city:"Providence",
      severity:"Low",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"Leeanne",
      email:"test@gmail.com",
      state:"District of Columbia",
      city:"Washington D.C.",
      severity:"Low",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"Nancy",
      email:"test@gmail.com",
      state:"Texas",
      city:"Dallas",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
  ], (error, createdRequest) => {
    if (error) {
        res.status(400).json({ error: error.message })
      }
      res.redirect("/requests") //  .json() will send proper headers in response so client knows it's json coming back
})
})


app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});