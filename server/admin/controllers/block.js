const Block = require('../models/block');
const errors = require('../_help/error_handler');
const fs = require('fs');
const sharp = require('sharp');
const upload = require('../middleware/multer').single('image');

module.exports = {
    getBlock: async (req,res) => {
        try {
            let block = await Block.find({});
            res.status(201).json(block)
        } catch (e) {
            errors.notFound(res, errors);
        }
    },
    addBlock: async (req,res) => {
        console.log(req.body);
        if (req.body.type) {
            switch (req.body.type) {
                case 'block': {
                    let block = {
                        size: req.body.size,
                        type: req.body.type,
                        block: {
                            post:[req.body.post]
                        }
                    };
                    try {
                        await new Block(block).save();
                        res.status(201).json({
                            msg: "Block has created successfully"
                        })
                    } catch (e) {
                        errors.invalidData(res, errors);
                    }
                }break;
                case 'video': {
                    console.log(req.file);
                    if (req.file) {
                        await upload(req,res, async err => {
                            let block = {
                                size: req.body.size,
                                type: req.body.type,
                                video: {
                                    url: req.file.filename
                                }
                            };
                            try {
                                await new Block(block).save();
                                res.status(201).json({
                                    msg: "Block has created successfully"
                                })
                            } catch (e) {
                                errors.invalidData(res, errors);
                            }
                        })
                    } else {
                        let block = {
                            size: req.body.size,
                            type: req.body.type,
                            video: {
                                url: req.body.url
                            }
                        };
                        try {
                            await new Block(block).save();
                            res.status(201).json({
                                msg: "Block has created successfully"
                            })
                        } catch (e) {
                            errors.invalidData(res, errors);
                        }
                    }
                }break;
                case 'image': {
                    await upload(req,res, async err => {
                        let block = {
                            size: req.body.size,
                            type: req.body.type,
                            image: {
                                url: req.body.url,
                                img: req.file.filename,
                                size: req.body.size,
                                hovertext: req.body.hovertext,
                                bgcolor: req.body.bgcolor
                            }
                        };
                        try {
                            await new Block(block).save();
                            res.status(201).json({
                                msg: "Block has created successfully"
                            })
                        } catch (e) {
                            errors.invalidData(res, errors);
                        }
                    });
                }break;
                case 'imageText': {
                    await upload(req,res, async err => {
                        let block = {
                            size: req.body.size,
                            type: req.body.type,
                            imagetext: {
                                url: req.body.url,
                                img: req.body.img,
                                subTitle: req.body.subTitle,
                                description: req.body.description,
                                title: req.body.title
                            }
                        };
                        try {
                            await new Block(block).save();
                            res.status(201).json({
                                msg: "Block has created successfully"
                            })
                        } catch (e) {
                            errors.invalidData(res, errors);
                        }
                    });
                }break;
            }
        } else {
            errors.invalidData(res,errors);
        }
    },
    changeBlock: async (req,res) => {
        let block = req.query.id + '';
        let candidate = await Block.findOne({_id: block});
        if (candidate) {
            switch (candidate.type) {
                case 'block': {
                    let block = {
                        size: req.body.size,
                        type: req.body.type,
                        post: [req.body.post]
                    };
                    try{
                        await Block.findByIdAndUpdate(
                            {_id: candidate._id},
                            {$set: block},
                            {new: true});
                        res.status(201).json(block)
                    } catch (e) {
                        errors.conflictError(res, errors)
                    }
                }break;
                case 'video': {
                    if (req.file) {
                        await upload(req,res, async err => {
                            let block = {
                                size: req.body.size,
                                type: req.body.type,
                                video: {
                                    url: req.file.filename
                                }
                            };
                            try{
                                await Block.findByIdAndUpdate(
                                    {_id: candidate._id},
                                    {$set: block},
                                    {new: true});
                                fs.unlinkSync(`./admin/_uploads/block/${candidate.video.url}`);
                                res.status(201).json(block)
                            } catch (e) {
                                errors.conflictError(res, errors)
                            }
                        })
                    } else {
                        let block = {
                            size: req.body.size,
                            type: req.body.type,
                            video: {
                                url: req.body.url
                            }
                        };
                        try{
                            await Block.findByIdAndUpdate(
                                {_id: candidate._id},
                                {$set: block},
                                {new: true});
                            if (block.video.url.slice(0,3) === 'http') {
                                fs.unlinkSync(`./admin/_uploads/block/${candidate.video.url}`);
                            }
                            res.status(201).json(block)
                        } catch (e) {
                            errors.conflictError(res, errors)
                        }
                    }
                }break;
                case 'image': {
                    if(req.file) {
                        upload(req,res,async err => {
                            let block = {
                                size: req.body.size,
                                type: req.body.type,
                                image: {
                                    img: req.file.filename,
                                    size: req.body.image.size,
                                    bgcolor: req.body.image.bgcolor,
                                    hovertext: req.body.image.hovertext,
                                    url: req.body.image.url
                                }
                            };
                            try{
                                await Block.findByIdAndUpdate(
                                    {_id: candidate._id},
                                    {$set: block},
                                    {new: true});
                                    fs.unlinkSync(`./admin/_uploads/block/${candidate.image.img}`);
                                res.status(201).json(block)
                            } catch (e) {
                                errors.conflictError(res, errors)
                            }
                        });
                    } else {
                        let block = {
                            size: req.body.size,
                            type: req.body.type,
                            image: {
                                img: req.body.img,
                                size: req.body.size,
                                bgcolor: req.body.bgcolor,
                                hovertext: req.body.hovertext,
                                url: req.body.url
                            }
                        };
                        try{
                            await Block.findByIdAndUpdate(
                                {_id: candidate._id},
                                {$set: block},
                                {new: true});
                            res.status(201).json(block)
                        } catch (e) {
                            errors.conflictError(res, errors)
                        }
                    }
                }break;
                case 'imageText': {
                    if(req.file) {
                        upload(req,res, async err => {
                            let block = {
                                size: req.body.size,
                                type: req.body.type,
                                imagetext: {
                                    url: req.body.url,
                                    img: req.file.filename,
                                    subTitle: req.body.subTitle,
                                    description: req.body.description,
                                    title: req.body.title
                                }
                            };
                            try{
                                await Block.findByIdAndUpdate(
                                    {_id: candidate._id},
                                    {$set: block},
                                    {new: true});
                                fs.unlinkSync(`./admin/_uploads/block/${candidate.imagetext.img}`);
                                res.status(201).json(block)
                            } catch (e) {
                                errors.conflictError(res, errors)
                            }
                        })
                    } else {
                        let block = {
                            size: req.body.size,
                            type: req.body.type,
                            imagetext: {
                                url: req.body.url,
                                img: req.body.img,
                                subTitle: req.body.subTitle,
                                description: req.body.description,
                                title: req.body.title
                            }
                        };
                        try{
                            await Block.findByIdAndUpdate(
                                {_id: candidate._id},
                                {$set: block},
                                {new: true});
                            res.status(201).json(block)
                        } catch (e) {
                            errors.conflictError(res, errors)
                        }
                    }
                }break;
            }
        }  else {
            errors.notFound(res, errors)
        }
    },
    deleteBlock: async (req,res) => {
        let block = req.query.id + '';
        let candidate = await Block.findOne({_id: block});
        if (candidate) {
            try {
                await Block.remove({_id: block});
                switch (candidate.type) {
                    case 'video': {
                        if (candidate.video.url.slice(0,4) !== 'http') {
                            fs.unlinkSync(`./admin/_uploads/block/${candidate.video.url}`);
                        }
                    }break;
                    case 'image': {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.img}`);
                    }break;
                    case 'imageText': {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.img}`);
                    }break;
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
