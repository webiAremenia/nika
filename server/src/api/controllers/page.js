const Page = require('../../admin/models/page');
const errors = require('../_helper/error_handler');


module.exports = {
    getAll: async (req,res) => {
        try {
            let pages = await Page.find();
            res.status(201).json(pages)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    getOne: async (req, res) => {
        try {
            let page = await Page.findOne({key: req.params.key});
            res.status(200).json(page)
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
