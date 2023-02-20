const express = require('express')
const router = express.Router()
const learnController = require('../app/controllers/learnController')

router.get('/:slug', learnController.slug)


module.exports = router