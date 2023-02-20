const express = require('express')
const router = express.Router()
const coursesController = require('../app/controllers/coursesController')

router.get('/:slug', coursesController.detail)


module.exports = router