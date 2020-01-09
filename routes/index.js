const express = require('express')
const router = express.Router()

//define some routes
router.use('/lasagne', require('./lasagne-routes'))


module.exports= router