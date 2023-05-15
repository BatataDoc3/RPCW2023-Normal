var express = require('express');
var router = express.Router();
var Jobs = require('../controller/sciencejobs')

/* GET home page. */

router.get('/contracts', function(req, res) {
    Jobs.list()
      .then(data => {
        res.json(data)
      }) 
      .catch(err => {
        res.json({err: err})
      })
})

router.get('/contracts/:id', function(req, res) {
    Jobs.getJob(req.params.id)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
})

router.get('/contracts?year=:year', function(req, res) {
    Jobs.getContractsByYear(req.params.year)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
})

router.get('/contracts?inst=:inst', function(req, res) {
    Jobs.getContractsByInstitution(req.params.inst)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
})

router.get('/contracts/courses', function(req, res) {
    Jobs.getCourses()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
})

router.get('/contracts/institutions', function(req, res) { 
    Jobs.getIntitutions()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
})

router.post('/contracts', function(req, res) {
    Jobs.addContract(req.body)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
})

router.delete('/contracts/:id', function(req, res) {
    Jobs.remove(req.params.id)
      .then(data => { 
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
})

module.exports = router;
