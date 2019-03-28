const Slider = require('../../admin/models/slider');
const errors = require('../_helper/error_handler');

module.exports = {
    getSliders: async (req,res) => {
        let sliders = await Slider.find().populate('img');
        if (sliders) {
            res.status(201).json(sliders);
        } else {
            errors.notFound(res, errors)
        }
    }
};
