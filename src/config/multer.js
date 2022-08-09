const multer = require('multer')

const upload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb (null, 'public/media/uploads/')
  },
  filename: (req,file,cb) => {
    cb(null, Date.now()+'-'+file.originalname)
  }
})

const file = multer({storage: upload})

module.exports = file