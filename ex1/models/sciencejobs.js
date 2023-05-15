var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
    NomeInstituicao: String,
})

module.exports = mongoose.model('scienceJobs', jobSchema)
