const Work = require('../models/work');
const errors = require('../_help/errorHandler');
const fs = require('fs');
const rimraf = require("rimraf");


module.exports = {
    getWork: async (req, res) => {
        try {
            let works = await Work.find({});
            res.status(200).json(works)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },

    addWork: async (req, res) => {
        let work = {
            title: req.body.title,
            description: req.body.description,
            slug: req.body.slug,
            img: req.body.imgURL,
            details: req.body.details,
            created: Date.now(),
            updated: Date.now(),
        };
        try {
            await new Work(work).save();
            res.status(201).json({
                msg: 'Work added successfully ...'
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    changeWork: async (req, res) => {
        let candidate = req.query.id + '';
        let work = {
            title: req.body.work.title,
            description: req.body.work.description,
            slug: req.body.work.slug,
            img: req.body.work.imgURL,
            details: req.body.work.details,
            updated: Date.now(),
        };
        try {
            await Work.findByIdAndUpdate(
                {_id: candidate},
                {$set: work},
                {new: true});
            req.body.videosArr.forEach(videoName => {
                fs.unlinkSync(__dirname + `/../../../_uploads/work/${videoName}`)
            });
            res.status(201).json(work)
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    deleteWork: async (req, res) => {
        let work = req.query.id + '';
        let candidate = await Work.findOne({_id: work});
        try {
            await Work.deleteOne({_id: work});
            if (candidate.details.length > 0) {
                candidate.details.forEach(d => {
                    if (d.type === 'video') {
                        fs.unlinkSync(__dirname + `/../../../_uploads/work/${d.videoURL}`)
                    }
                })
            }
            // fs.unlinkSync(__dirname + `/../../../_uploads/work/${id}`);
            res.status(201).json({
                msg: 'Portfolio has removed successfully'
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },

    addVideo: async (req, res) => {
        res.status(200).json({
            success: true,
            video: req.file.filename
        })
    },
    changeVideo: async (req, res) => {
        const remove = JSON.parse(req.body.delete);
        const id = req.query.id;
        if(remove) {
            fs.unlinkSync(__dirname + `/../../../_uploads/work/${id}`);
        }
        res.status(200).json({
            success: true,
            video: req.file.filename
        })
    },

    deleteVideo: async (req, res) => {
        const id = req.query.id;
        fs.unlinkSync(__dirname + `/../../../_uploads/work/${id}`);
        res.status(200).json({
            success: true,
            msg: 'Video deleted'
        })
    },


    deleteVideoMany: async (req, res) => {

        req.body.forEach(id => {
            fs.unlinkSync(__dirname + `/../../../_uploads/work/${id}`)
        });
        // fs.unlinkSync(__dirname + `/../../../_uploads/work/${id}`);
        res.status(200).json({
            success: true,
            msg: 'Video deleted'
        })
    },

};
