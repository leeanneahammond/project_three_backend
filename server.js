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
app.use('/state, stateRoutes')

<<<<<<< HEAD
mongoose.connect('mongodb://127.0.0.1:27017/state', { useNewUrlParser: true });
=======
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
>>>>>>> 0c8973f3433594a663656c1dcea20ff255e0f5a5
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
<<<<<<< HEAD
});


=======
});
>>>>>>> 0c8973f3433594a663656c1dcea20ff255e0f5a5
