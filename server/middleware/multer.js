const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(req.originalUrl.split('/')[2] === 'post' && req.method === 'POST'){
            cb(null, './_uploads/posts')
        }
        if (req.method === 'PUT' && req.originalUrl.split('/')[2].split('?')[0] === 'post') {
            cb(null, './_uploads/posts')
        }
    },
    filename: function (req, file, cb) {
        if (req.method === 'POST') {
            cb(null, new Date().getTime().toString() + file.originalname)
        } else if (req.method === 'PUT') {
            cb(null, new Date().getTime().toString() + file.originalname)
        }
    }
});


const upload = multer({
    storage: storage,
    limits: 1024 * 1024 * 5
});

module.exports = upload;
