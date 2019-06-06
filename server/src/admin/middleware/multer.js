const multer = require('multer');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        if (!fs.existsSync(__dirname + '/../../../_uploads')) {
            fs.mkdirSync(__dirname + '/../../../_uploads');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/posts')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/posts');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/posts/ckeditor')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/posts/ckeditor');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/pages')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/pages');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/pages/ckeditor')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/pages/ckeditor');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/medias')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/medias');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/vacancy')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/vacancy');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/slider')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/slider');
        }
        if (!fs.existsSync(__dirname + '/../../../_uploads/portfolio')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/portfolio');
        }

        if (!fs.existsSync(__dirname + '/../../../_uploads/portfolio/ckeditor')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/portfolio/ckeditor');
        }

        if (!fs.existsSync(__dirname + '/../../../_uploads/block')) {
            fs.mkdirSync(__dirname + '/../../../_uploads/block');
        }


        if (req.originalUrl.split('/')[2] === 'post' && req.method === 'POST') {
            if (req.originalUrl.split('/')[3] === 'ckeditor' && req.method === 'POST') {
                cb(null, __dirname + '/../../../_uploads/posts/ckeditor')
            } else {
                cb(null, __dirname + '/../../../_uploads/posts')
            }
        }
        if (req.originalUrl.split('/')[2] === 'page' && req.method === 'POST') {
            if (req.originalUrl.split('/')[3] === 'ckeditor' && req.method === 'POST') {
                cb(null, __dirname + '/../../../_uploads/pages/ckeditor')
            }
        }

        if (req.method === 'PUT' && req.originalUrl.split('/')[2].split('?')[0] === 'post') {
            cb(null, __dirname + '/../../../_uploads/posts')
        }
        if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'media') {
            cb(null, __dirname + '/../../../_uploads/medias')
        }
        if (req.method === 'PUT' && req.originalUrl.split('/')[2].split('?')[0] === 'media') {
            cb(null, __dirname + '/../../../_uploads/medias')
        }
        if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'vacancy') {
            cb(null, __dirname + '/../../../_uploads/vacancy')
        }
        if (req.method === 'PUT' && req.originalUrl.split('/')[2].split('?')[0] === 'vacancy') {
            cb(null, __dirname + '/../../../_uploads/vacancy')
        }
        if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'portfolio') {
            if (req.originalUrl.split('/')[3] === 'ckeditor' && req.method === 'POST') {
                cb(null, __dirname + '/../../../_uploads/portfolio/ckeditor')
            } else {
                cb(null, __dirname + '/../../../_uploads/portfolio')
            }
        }
        if (req.method === 'PUT' && req.originalUrl.split('/')[2].split('?')[0] === 'portfolio') {
            cb(null, __dirname + '/../../../_uploads/portfolio')
        }
        if (req.method === 'POST' && req.originalUrl.split('/')[2] === 'block') {
            cb(null, __dirname + '/../../../_uploads/block')
        }
        if (req.method === 'PUT' && req.originalUrl.split('/')[2].split('?')[0] === 'block') {
            cb(null, __dirname + '/../../../_uploads/block')
        }

    },
    filename: function (req, file, cb) {
        if(req.originalUrl.split('/')[3] !== 'ckeditor' && req.method === 'POST') {
            if (req.method === 'POST') {
                cb(null, new Date().getTime().toString() + file.originalname)
            } else if (req.method === 'PUT') {
                cb(null, new Date().getTime().toString() + file.originalname)
            }
        } else {
            cb(null, file.originalname)
        }
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    // if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg') {
    //     cb(null, true);
    // } else {
    //     cb(null, true); // false error depq
    // }
};


const upload = multer({
    // fileFilter: fileFilter,
    storage: storage
});

module.exports = upload;


