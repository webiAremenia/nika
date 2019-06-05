const Post = require('../../admin/models/post');
const errors = require('../_helper/error_handler');

module.exports = {
    getPosts: async (req, res) => {
        try {
            let posts = await Post.find({});
            res.status(201).json(posts)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    getPost: async (req, res) => {
        try {
            let posts = await Post.find({_id: req.params.id});
            res.status(201).json(posts[0])
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    getMany: async (req, res) => {
        try {
            arr = JSON.parse(req.params.arr);
            let posts = await Post.find({_id: arr}).select('_id title description content image');
            res.status(201).json(posts)
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
