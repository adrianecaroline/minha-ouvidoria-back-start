const multer = require('multer')

const upload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb (null, 'src/media/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '-' + file.originalname.split('.')[1])
  }
})

const file = multer({storage: upload})

module.exports = file