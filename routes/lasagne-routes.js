const express = require('express')
const router = express.Router()
const { index, create } = require('../controllers/lasagne-controller')

// here we're going to create our routes
router.get('/', index)
router.post('/create', express.json(), create)

module.exports = router
