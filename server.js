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
      state:"NY",
      city:"NY",
      severity:"High",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"Phi",
      email:"test@gmail.com",
      state:"RI",
      city:"Providence",
      severity:"Low",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"Leeanne",
      email:"test@gmail.com",
      state:"DC",
      city:"Washington D.C.",
      severity:"Low",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"Nancy",
      email:"test@gmail.com",
      state:"TX",
      city:"Dallas",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"VI",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"MP",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"GU",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"AS",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"PR",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"WY",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"WV",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"WI",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    }, {
      name:"test",
      email:"test@gmail.com",
      state:"WA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"VT",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"VA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"UT",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"TN",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"SD",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"SC",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"PA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"OR",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"OK",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"OH",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"NV",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"NM",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"NJ",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"NH",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"NE",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"ND",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"NC",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"MT",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"MS",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"MO",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"MN",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"MI",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"ME",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"MD",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"MA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"LA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"KY",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"KS",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"IN",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"IL",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"ID",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"IA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"HI",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"GA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"FL",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"DE",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"CT",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"CO",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"CA",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"AZ",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"AR",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"AL",
      city:"test",
      severity:"Medium",
      request:"Please Help!!",
      support: 1
    },
    {
      name:"test",
      email:"test@gmail.com",
      state:"AK",
      city:"test",
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
