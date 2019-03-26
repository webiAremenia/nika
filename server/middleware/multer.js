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
        if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'slider') {
            cb(null, './_uploads/sliders')
        }
        if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'media') {
            cb(null, './_uploads/medias')
        }
        if (req.method === 'PUT' &&  req.originalUrl.split('/')[2].split('?')[0] === 'media') {
            cb(null, './_uploads/medias')
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

var fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};



const upload = multer({
    fileFilter: fileFilter,
    storage: storage
});

module.exports = upload;
