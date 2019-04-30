const Block = require('../models/block');
const errors = require('../_help/errorHandler');
const fs = require('fs');
const sharp = require('sharp');

module.exports = {
    getBlock: async (req, res) => {
        try {
            let block = await Block.find({});
            res.status(201).json(block)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    addBlock: async (req, res) => {
        const data = JSON.parse(req.body.data);
        try {
            const block = {
                name: data.name,
                size: data.size,
                type: data.type,
                portfolio: data.portfolio,
                stories: data.stories && data.stories.length > 0 ? data.stories: null,
                video: data.video,
                content: data.content ? {
                    image: req.file.filename,
                    animation: data.content.animation,
                    animationText: data.content.animationText,
                    bgColor: data.content.bgColor,
                    bgSize: data.content.bgSize,
                    url: data.content.url
                }:null
            };
            new Block(block).save();
            res.status(201).json({
                success: true
            })
        } catch (e) {
            console.log(e);
            res.status(500).json({err: e.message})
        }


    },
    changeBlock: async (req, res) => {
        let candidate = await Block.findOne({_id: req.params.id});
        if (candidate) {
            switch (candidate.type) {
                case 'blog': {
                    let block = {
                        blockTitle: req.body.blockTitle,
                        size: req.body.size,
                        type: req.body.type,
                        blog: {
                            post: JSON.parse(req.body.post)
                        }
                    };
                    console.log(block);
                    console.log(candidate);
                    try {
                        await Block.findByIdAndUpdate(
                            {_id: blockId},
                            {$set: block},
                            {new: true});
                        res.status(201).json(block)
                    } catch (e) {
                        errors.conflictError(res, errors)
                    }
                }
                    break;
                case 'project': {
                    let block = {
                        blockTitle: req.body.blockTitle,
                        size: req.body.size,
                        type: req.body.type,
                        project: {
                            post: JSON.parse(req.body.portfolio)
                        }
                    };
                    try {
                        await Block.findByIdAndUpdate(
                            {_id: blockId},
                            {$set: block},
                            {new: true});
                        res.status(201).json(block)
                    } catch (e) {
                        errors.conflictError(res, errors)
                    }
                }
                    break;
                case 'video': {
                    let block = {
                        blockTitle: req.body.blockTitle,
                        size: req.body.size,
                        type: req.body.type,
                        video: {
                            url: req.files.length > 0 ? req.files[0].filename : req.body.url
                        }
                    };
                    try {
                        await Block.findByIdAndUpdate(
                            {_id: candidate._id},
                            {$set: block},
                            {new: true});
                        if (req.files[0]) {
                            fs.unlinkSync(`./admin/_uploads/block/${candidate.video.url}`);
                        }
                        res.status(201).json(block)
                    } catch (e) {
                        errors.conflictError(res, errors)
                    }
                }
                    break;
                case 'image': {
                    let block = {
                        blockTitle: req.body.blockTitle,
                        size: req.body.size,
                        type: req.body.type,
                        image: {
                            img: req.files.length > 0 ? req.files[0].filename : req.body.img,
                            size: req.body.imagesize,
                            bgcolor: req.body.bgcolor,
                            load: req.body.load,
                            hovertext: req.body.hovertext,
                            url: req.body.url
                        }
                    };
                    try {
                        await Block.findByIdAndUpdate(
                            {_id: candidate._id},
                            {$set: block},
                            {new: true});
                        if (req.files.length > 0) {
                            fs.unlinkSync(`./admin/_uploads/block/${candidate.image.img}`);
                        }
                        res.status(201).json(block)
                    } catch (e) {
                        errors.conflictError(res, errors)
                    }
                }
                    break;
                case 'gif': {
                    console.log('#########################');
                    console.log(req.body);
                    console.log('#########################');

                    let block = {
                        blockTitle: req.body.blockTitle,
                        size: req.body.size,
                        type: req.body.type,
                        gif: {
                            url: req.body.url,
                            size: req.body.imagesize,
                            hovertext: req.body.hovertext,
                            load: req.body.load,
                            bgcolor: req.body.bgcolor
                        }
                    };

                    if (req.files && req.files.filter(item => item.filename.split('.')[item.filename.split('.').length - 1] === 'gif').length > 0) {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.gif}`);
                        block.gif = req.files.filter(item => item.filename.split('.')[item.filename.split('.').length - 1] === 'gif')[0].filename
                    } else {
                        block.gif.gif = req.body.gif
                    }
                    if (req.files && req.files.filter(item => item.filename.split('.')[item.filename.split('.').length - 1] !== 'gif').length > 0) {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.music}`);
                        block.music = req.files.filter(item => item.filename.split('.')[item.filename.split('.').length - 1] !== 'gif')[0].filename
                    } else {
                        block.gif.music = req.body.music
                    }
                    try {
                        await Block.findByIdAndUpdate(
                            {_id: candidate._id},
                            {$set: block},
                            {new: true});
                        res.status(201).json(block)
                    } catch (e) {
                        errors.conflictError(res, errors)
                    }
                }
                    break;
                case 'imagetext': {

                    let block = {
                        blockTitle: req.body.blockTitle,
                        size: req.body.size,
                        type: req.body.type,
                        imagetext: {
                            url: req.body.url,
                            img: req.files.length > 0 ? req.files[0].filename : req.body.img,
                            subtitle: req.body.subtitle,
                            description: req.body.description,
                            title: req.body.title
                        }
                    };
                    try {
                        await Block.findByIdAndUpdate(
                            {_id: candidate._id},
                            {$set: block},
                            {new: true});
                        if (req.files.length > 0) {
                            fs.unlinkSync(`./admin/_uploads/block/${candidate.imagetext.img}`);
                        }
                        res.status(201).json(block)
                    } catch (e) {
                        errors.conflictError(res, errors)
                    }
                }
                    break;
            }
        } else {
            errors.notFound(res, errors)
        }
    },
    deleteBlock: async (req, res) => {
        let block = req.query.id + '';
        let candidate = await Block.findOne({_id: block});
        if (candidate) {
            console.log(candidate);
            try {
                await Block.remove({_id: block});
                switch (candidate.type) {
                    case 'video': {
                        console.log(candidate);
                        if (candidate.video.url.indexOf('http') < 0) {
                            fs.unlinkSync(`./admin/_uploads/block/${candidate.video.url}`);
                        }
                    }
                        break;
                    case 'image': {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.image.img}`);
                    }
                        break;
                    case 'gif': {
                        console.log(candidate);
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.gif}`);
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.music}`);
                    }
                        break;
                    case 'imagetext': {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.imagetext.img}`);
                    }
                        break;
                }
                res.status(201).json({
                    msg: 'Block has removed successfully'
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else {
            errors.notFound(res, errors)
        }
    }
};
