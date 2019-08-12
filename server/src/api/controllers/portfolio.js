const Portfolio = require('../../admin/models/portfolio');
const errors = require('../_helper/error_handler');


module.exports = {
    getPortfolio: async (req,res) => {
        try {
            let portfolio = await Portfolio.find();
            res.status(201).json(portfolio)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    getOne: async (req, res) => {
        try {
            let portfolio = await Portfolio.findOne({_id: req.params.id});
            res.status(200).json(portfolio)
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
