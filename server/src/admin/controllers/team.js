const Team = require('../models/team');
const errors = require('../_help/errorHandler');


module.exports = {
    getAll: async (req, res) => {
        try {
            let teams = await Team.find({});
            res.status(201).json(teams)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    update: async (req, res) => {

        let candidate = req.query.id + '';
        try {
            await Team.findByIdAndUpdate(
                {_id: candidate},
                {$set: req.body},
                {new: true});
            res.status(201).json({
                success: true
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },


};
