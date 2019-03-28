const Post = require('../../admin/models/post');
const errors = require('../_helper/error_handler');

module.exports = {
    getPosts: async (req,res) => {
            try {
                let posts = await Post.find({});
                res.status(201).json(posts)
            } catch (e) {
                errors.notFound(res, errors);
            }
    }
};
