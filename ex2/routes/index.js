var express = require('express');
var router = express.Router();
var Jobs = require('../controller/sciencejobs')

/* GET home page. */

router.get('/', function(req, res) {
    Jobs.list()
      .then(data => {
        res.render('index', {s: data})
      }) 
      .catch(err => {
        res.render({err: err})
      })
})

router.get('/:id', function(req, res) {
    Jobs.getJob(req.params.id)
      .then(data => {
        res.render('contrato', {a: data})
      })
      .catch(err => {
        res.render({error: err})
      })
})

router.get('/inst/:inst', function(req, res) {
    Jobs.getContractsByInstitution(req.params.inst)
      .then(data => {
        res.render('instituicao', {s: data})
      })
      .catch(err => {
        res.json(err)
      })
})

module.exports = router;
