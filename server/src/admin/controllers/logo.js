const Logo = require('../models/logo');
const Media = require('../models/media');
const errors = require('../_help/errorHandler');
const jwtCompare = require('../middleware/jwtCompare');
const fs = require('fs');
const sharp = require('sharp');

module.exports = {
    getLogos: async (req,res) => {
        let logos = await Logo.find({}).populate('img');
        if (logos) {
            res.status(201).json(logos);
        } else {
            errors.notFound(res, errors)
        }
    },
    addLogo: async (req,res) => {
        let logo = {
            title: req.body.title,
            img: req.body.img
        };
        console.log(logo);
        try {
            await new Logo(logo).save();
            res.status(201).json({
                msg: 'Logo added successfully ...'
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    changeLogo: async (req,res) => {
        let candidate = req.query.id + '';
        let logo = {
            img: req.body.img
        };
        try {
            await Logo.findByIdAndUpdate(
                {_id: candidate},
                {$set: logo},
                {new: true});
            res.status(201).json(logo)
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    deleteLogo: async (req,res) => {
        let slider = req.query.id + '';
        try {
            await Logo.remove({_id: slider});
            res.status(201).json({
                msg: 'Logo has removed successfully'
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    getMedia: async (req,res) => {
        let media = await Media.find({type: 'logo'});
        if (media) {
            res.status(201).json(media);
        } else {
            errors.notFound(res, errors)
        }
    }
};
