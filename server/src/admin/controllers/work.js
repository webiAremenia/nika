const Work = require('../models/work');
const errors = require('../_help/errorHandler');
const fs = require('fs');


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
            subTitle: req.body.subTitle,
            description: req.body.description,
            slug: req.body.slug,
            img: req.file.filename,
            details: JSON.parse(req.body.details),
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
        let candidate = req.params.id;

        let work = {
            title: req.body.title,
            subTitle: req.body.subTitle,
            description: req.body.description,
            slug: req.body.slug,
            details: JSON.parse(req.body.details),
            updated: Date.now(),
        };

        if (req.file) {
            work.img = req.file.filename
        }
        let oldWork = await Work.findOne({_id: candidate});
        try {
            const old = await Work.findOneAndUpdate(
                {_id: candidate},
                {$set: work},
                {new: true});

            if (!old) {
                res.status(200).json({error: {message: 'not found !'}});
            }

            const videosArr = JSON.parse(req.body.videosArr);
            if (videosArr.length > 0) {
                videosArr.forEach(videoName => {
                    fs.unlinkSync(__dirname + `/../../../_uploads/work/${videoName}`)
                });
            }

            if (oldWork.img && req.file) {
                fs.unlinkSync(__dirname + `/../../../_uploads/work/${oldWork.img}`)
            }

            res.status(200).json(work)
        } catch (e) {
            res.status(200).json({error: e});
        }
    },
    deleteWork: async (req, res) => {
        let work = req.query.id + '';
        let candidate = await Work.findOne({_id: work});
        try {
            await Work.deleteOne({_id: work});
            fs.unlinkSync(__dirname + `/../../../_uploads/work/${candidate.img}`)
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
        if (remove) {
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

        console.log(req.body);
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
