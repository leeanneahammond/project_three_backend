const express = require('express');
const app = express();
const requests = express.Router();
const Request = require("../models/request.js")



//INDEX ROUTE
requests.get("/", (req, res) => {
    res.send("Index");
});

//CREATE ROUTE
requests.post("/", (req, res) => {
    console.log(req.body)
    Request.create(req.body, (error, createdRequest) => {
        if (error) {
            res.status(400).json({ error: error.message })
          }
          res.status(200).json(createdRequest) //  .json() will send proper headers in response so client knows it's json coming back
    })
});





module.exports = requests;