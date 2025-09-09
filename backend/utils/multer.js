const multer = require('multer')
const fs = require('fs')
const path = require('path')

const uploadPath = path.join(__dirname, '..', 'uploads')
if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath)
}

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, uploadPath)
    },

    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
    }
})

const upload = multer({ storage: storage })
module.exports = upload