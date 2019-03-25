const Post = require('../models/post');
const errors = require('../_help/error_handler');
const jwtCompare = require('../middleware/jwtCompare');
const fs = require('fs');

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
            let post = {
              title: req.body.title,
              description: req.body.description,
              content: req.body.content,
              alt: req.body.alt,
              image: req.file.filename
            };
            try {
                await new Post(post).save();
                res.status(201).json({
                    msg: 'Post added successfully ...'
                })
            } catch (e) {
                errors.invalidData(res, errors);
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
            fs.unlinkSync(`./_uploads/posts/${oldPost.image}`);
        }
        post.updated = new Date().toLocaleDateString();
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
            console.log(post);
            try {
                await Post.remove({_id: post});
                fs.unlinkSync(`./_uploads/posts/${candidate.image}`);
                res.status(201).json({
                    msg: 'Post has removed successfully'
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
    },
};
