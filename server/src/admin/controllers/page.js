const Page = require('../models/page');
const errors = require('../_help/errorHandler');
const fs = require('fs');
const sharp = require('sharp');


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
            let page = {
                key: req.body.key,
                content: req.body.content,
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
        // if (req.body.deletedimages) {
        //     let deletedimages = req.body.deletedimages.split(',');
        //     if (deletedimages.length > 0) {
        //         deletedimages.forEach(item => {
        //             fs.unlinkSync(__dirname + `/../../../_uploads/portfolio/${item}`);
        //         });
        //     }
        // }
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
    deletePage: async (req, res) => {
        let page = req.query.id + '';
        try {
            await Page.remove({_id: page});
            res.status(201).json({
                msg: 'Page has removed successfully'
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },

    ckEditorAddImage: async (req, res) => {
        console.log('eeeeeeeeeeeeeee' + req.file.filename)
        res.status(201).json({
            filename: req.file.filename
        })
    },

    ckEditorDeleteImage: async (req, res) => {
        console.log(11111111111111)
        let name = req.query.name;
        fs.unlinkSync(__dirname + `/../../../_uploads/pages/ckeditor/${name}`);
        res.status(201).json({
            msg: 'CkImage has been removed'
        })
    }

};