const Slider = require('../models/slider');
const errors = require('../_help/error_handler');
const jwtCompare = require('../middleware/jwtCompare');
const fs = require('fs');
const sharp = require('sharp');

module.exports = {
    getSliders: async (req,res) => {
        let sliders = await Slider.find().populate('img');
        if (sliders) {
            res.status(201).json(sliders);
        } else {
            errors.notFound(res, errors)
        }
    },
    addSlider: async (req,res) => {
        console.log(req);
        let slider = {
          title: req.body.title,
          description: req.body.description,
          url: req.body.url,
          img: req.body.media
        };
        console.log(slider);
        try {
            await new Slider(slider).save();
            res.status(201).json({
                msg: 'Slider added successfully ...'
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    changeSlider: (req,res) => {
        res.end()
    },
    deleteSlider: (req,res) => {
        res.end()
    }
};
