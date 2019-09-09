const Work = require('../../admin/models/work');
const errors = require('../_helper/error_handler');


module.exports = {
    getAll: async (req,res) => {
        try {
            let works = await Work.find();
            res.status(201).json(works)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    getOne: async (req, res) => {
        try {
            let work = await Work.findOne({_id: req.params.id});
            res.status(200).json(work)
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
