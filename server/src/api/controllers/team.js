const Team = require('../../admin/models/team');
const errors = require('../_helper/error_handler');


module.exports = {
    getTeam: async (req, res) => {
        try {
            let team = await Team.find({});
            res.status(200).json(team);
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
