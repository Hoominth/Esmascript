const express = require('express')
const router = express.Router()
const {
      courseDelete,
      coursesRead,
      coursesReadCreate,
      coursesReadUpdate,
      handleCoursesCreate,
      handleCoursesUpdate
} = require('../app/controllers/adminController')
const multerConfig = require('../app/middlewares/multer')

router.get('/delete/:id', courseDelete)
router.post('/create/handle', multerConfig, handleCoursesCreate)
router.get('/create', coursesReadCreate)
router.post('/edit/handle', multerConfig, handleCoursesUpdate)
router.get('/edit/:id', coursesReadUpdate)
router.get('/', coursesRead)

module.exports = router