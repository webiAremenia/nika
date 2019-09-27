const Work = require('../../admin/models/work');
const errors = require('../_helper/error_handler');


module.exports = {
    getAll: async (req,res) => {
        try {
            let works = await Work.find({})
                .select('description img slug title subTitle');
            res.cacheControl = {
                maxAge: 31536000
            };
            res.status(201).json(works)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    getOne: async (req, res) => {
        try {
            let work = await Work.findOne({slug: req.params.slug})
                .select('details');
            res.status(200).json({details: work.details})
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
