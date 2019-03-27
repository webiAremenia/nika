const multer = require('multer');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(__dirname + '/../_uploads')) {
            fs.mkdirSync(__dirname + '/../_uploads');
        }
        if (!fs.existsSync(__dirname + '/../_uploads/posts')) {
            fs.mkdirSync(__dirname + '/../_uploads/posts');
        }
        if (!fs.existsSync(__dirname + '/../_uploads/media')) {
            fs.mkdirSync(__dirname + '/../_uploads/media');
        }
        if (!fs.existsSync(__dirname + '/../_uploads/slider')) {
            fs.mkdirSync(__dirname + '/../_uploads/sliders');
        }

        if(req.originalUrl.split('/')[2] === 'post' && req.method === 'POST'){
            cb(null, './admin/_uploads/posts')
        }
        if (req.method === 'PUT' && req.originalUrl.split('/')[2].split('?')[0] === 'post') {
            cb(null, './admin/_uploads/posts')
        }
        // if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'slider') {
        //     cb(null, './_uploads/sliders')
        // }
        if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'media') {
            cb(null, './admin/_uploads/medias')
        }
        if (req.method === 'PUT' &&  req.originalUrl.split('/')[2].split('?')[0] === 'media') {
            cb(null, './admin/_uploads/medias')
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




