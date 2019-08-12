const Page = require('../models/page');
const errors = require('../_help/errorHandler');
const fs = require('fs');
const sharp = require('sharp');
const rimraf = require("rimraf");


module.exports = {
    getPages: async (req, res) => {
        try {
            let pages = await Page.find({});
            res.status(201).json(pages)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    getPageById: async (req, res) => {
        try {
            let page = await Page.findOne({_id: req.params.id});
            res.status(201).json(page)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    addPage: async (req, res) => {
        let candidate = await Page.findOne({key: req.body.key});
        if (!candidate) {
            console.log(req.body)
            let page = {
                key: req.body.key,
                content: req.body.content,
                random: req.body.random
            };

            try {
                await new Page(page).save();
                res.status(201).json({
                    msg: 'Page added successfully ...'
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else {
            // req.files.forEach(item => {
            //     fs.unlinkSync(__dirname + `/../../../_uploads/portfolio/${item.filename}`);
            // });
            errors.conflictError(res, errors)
        }
    },
    changePage: async (req, res) => {
        // console.log(req.body)
        // console.log(req.query.id)
        let candidate = req.query.id + '';
        let page = {
            key: req.body.key,
            content: req.body.content
        };
        try {
            await Page.findByIdAndUpdate(
                {_id: candidate},
                {$set: page},
                {new: true});
            res.status(201).json(page)
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },

    deleteNoEmptyDir: async (req, res) => {
        rimraf.sync(__dirname + `/../../../_uploads/pages/ckeditor/${req.params.dir}`);
    },
    deletePage: async (req, res) => {
        let page = req.query.id + '';
        let candidate = await Page.findOne({_id: page});
        try {
            await Page.remove({_id: page});
            rimraf.sync(__dirname + `/../../../_uploads/pages/ckeditor/${candidate.random}`);
            res.status(201).json({
                msg: 'Page has removed successfully'
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },

    ckEditorAddImage: async (req, res) => {
        res.status(201).json({
            filename: req.file.filename
        })
    },

    ckEditorDeleteImage: async (req, res) => {
        let name = req.query.name;
        fs.unlinkSync(__dirname + `/../../../_uploads/pages/ckeditor/${name}`);
        res.status(201).json({
            msg: 'CkImage has been removed'
        })
    }

};
