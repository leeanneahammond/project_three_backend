const express = require('express');
const app = express();
const requests = express.Router();
const Request = require("../models/request.js")



//INDEX ROUTE
requests.get('/', (req, res) => {
    Request.find({}, (err, foundRequests) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundRequests)
    })
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


//DELETE ROUTE
requests.delete('/:id', (req, res) => {
    Request.findByIdAndRemove(req.params.id, (err, deletedRequest) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedRequest)
    })
});


//UPDATE ROUTE:
requests.put('/:id', (req, res) => {
    Request.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRequest) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedRequest)
    })
})










module.exports = requests;