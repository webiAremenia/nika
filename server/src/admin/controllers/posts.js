const Post = require('../models/post');
const errors = require('../_help/errorHandler');
const jwtCompare = require('../middleware/jwtCompare');
const fs = require('fs');
const sharp = require('sharp');
const rimraf = require("rimraf");


module.exports = {
    getPosts: async (req,res) => {
            try {
                let posts = await Post.find({});
                res.status(201).json(posts)
            } catch (e) {
                errors.notFound(res, errors);
            }
    },
    addPost: async (req,res) => {
        let candidate = await Post.findOne({title: req.body.title});
        if (!candidate) {
            let post = {
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                alt: req.body.alt,
                image: req.file.filename,
                random: req.body.random
            };
            sharp(req.file.path)
                .resize({
                    width: 400,
                    height: 400
                })
                .sharpen()
                .toBuffer()
                .then(data => fs.writeFileSync(req.file.path, data))
                .catch(e => console.log(e));
            try {
                await new Post(post).save();
                res.status(201).json({
                    msg: 'Post added successfully ...'
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else {
            fs.unlinkSync(__dirname + `/../../../_uploads/posts/${req.file.filename}`);
            errors.conflictError(res, errors)
        }
    },
    changePost: async (req,res) => {
        let candidate = req.query.id + '';
        let oldPost = await Post.findOne({_id: req.query.id});
        let post = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            alt: req.body.alt,
            image: req.file ? req.file.filename : req.body.image
        };
        if (req.file) {
            fs.unlinkSync(__dirname + `/../../../_uploads/posts/${oldPost.image}`);
        }
        post.updated = new Date();
        try {
            await Post.findByIdAndUpdate(
                {_id: candidate},
                {$set: post},
                {new: true});
            res.status(201).json(post)
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    deletePost: async (req,res) => {
            let post = req.query.id;
            let candidate = await Post.findOne({_id: post});
            try {
                await Post.remove({_id: post});
                fs.unlinkSync(__dirname + `/../../../_uploads/posts/${candidate.image}`);
                rimraf.sync(__dirname + `/../../../_uploads/posts/ckeditor/${candidate.random}`);
                res.status(201).json({
                    msg: 'Post has removed successfully'
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
    },
    deleteNoEmptyDir: async (req, res) => {
        rimraf.sync(__dirname + `/../../../_uploads/posts/ckeditor/${req.params.dir}`);
    },

    ckEditorAddImage: async (req,res) => {
        res.status(201).json({
            // filename: req.file.filename
            msg : 'Ok'
        })
    },

    ckEditorDeleteImage: async (req, res) => {
        console.log(1111111)
        let name = req.query.name;
        fs.unlinkSync(__dirname + `/../../../_uploads/posts/ckeditor/${name}`);
        res.status(201).json({
            msg: 'CkImage has been removed'
        })
    }
};
