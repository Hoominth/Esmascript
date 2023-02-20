const express = require('express')
const router = express.Router()
const signoutController = require('../app/controllers/signoutController')

router.get('/', signoutController.index)

module.exports = router