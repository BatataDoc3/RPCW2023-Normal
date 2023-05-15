var axios = require('axios')
var Jobs = require('../models/sciencejobs')

module.exports.list = () => {
    return Jobs.find()
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.getJob = id => {
    return Jobs.findOne({ _id: id })
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}


module.exports.findInstituition = inst => {
    return Jobs.find({ InstituicaoEnsino: inst })
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.getContractsByYear = year => {
    return Jobs.find({ DataInicioContrato: year })
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.getContractsByInstitution = inst => {
    return Jobs.find({ NomeInstituicao: inst })
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.getCourses = () => {
    return Jobs.distinct('Curso')
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.getIntitutions = () => {
    return Jobs.distinct('InstituicaoEnsino')
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.addContract = (contract) => {
    return Jobs.create(contract)
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.removeContract = (id) => {
    return Jobs.deleteOne({ _id: id })
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}