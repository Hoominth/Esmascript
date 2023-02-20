const express = require('express')
const router = express.Router()
const signinController = require('../app/controllers/signinController')

router.get('/', signinController.index)
router.post('/', signinController.login)

module.exports = router