const Logo = require('../../admin/models/logo');
const errors = require('../_helper/error_handler');

module.exports = {
    getLogos: async (req, res) => {
        let logos = await Logo.find().populate('img');
        if (logos) {
            res.status(201).json(logos);
        } else {
            errors.notFound(res, errors)
        }
    }
};
