const multer = require('multer')
const storage = multer.diskStorage({
      destination: (req, file, cb) => {
            cb(null, './src/public/uploads/')
      },
      filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
      }
})
const upload = multer({ storage })


const multerConfig = upload.fields([{ name: "image", maxCount: 1, }])
module.exports = multerConfig