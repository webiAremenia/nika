const Block = require('../models/block');
const errors = require('../_help/errorHandler');
const fs = require('fs');
// const sharp = require('sharp');
// let imgConvert = require('image-convert');
const gifFrames = require('gif-frames');

module.exports = {
    getBlock: async (req, res) => {
        try {
            let block = await Block.find({}).populate('stories');
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
                bgColor: null,
                videoText: null,
                twitter: data.twitter || null,
                portfolio: data.portfolio ? data.portfolio.project : null,
                stories: data.stories && data.stories.settings.length > 0 ? data.stories.settings : null,
                video: null,
                gif: data.gif ? {
                    gif: req.files[0] ? req.files[0].filename : null,
                    image: '',
                    mp3: req.files[1] ? req.files[1].filename : null,
                    bgColor: data.gif.bgColor,

                } : null,
                content: data.content ? {
                    image: req.files[0].filename,
                    animation: data.content.animation,
                    animationText: data.content.animationText,
                    bgColor: data.content.bgColor,
                    bgSize: data.content.bgSize,
                    url: data.content.url
                } : null
            };
            if (req.files.length > 0) {
                // console.log('------ ', req.files);
                if (req.files[0].fieldname === 'video') {
                    block.video = req.files[0].filename;
                    block.videoText = data.video.videoText;
                    console.log('-------')
                }
            }
            if (data.portfolio) {
                block.bgColor = data.portfolio.bgColor
            } else if (data.stories) {
                block.bgColor = data.stories.bgColor
            }


            if (data.type === 'GIF') {
                await gifFrames(
                    {
                        url: 'http://localhost:3000/uploads/block/' + req.files[0].filename,
                        frames: '0',
                        outputType: 'png',
                        cumulative: true
                    },
                    function (err, frameData) {
                        if (err) {
                            throw err;
                        }
                        frameData.forEach(function (frame) {
                            frame.getImage().pipe(fs.createWriteStream(
                                './admin/_uploads/block/' + req.files[0].filename.split('.')[0] + '.png'
                            ));
                            block.gif.image = req.files[0].filename.split('.')[0] + '.png';
                            console.log(1);
                        });
                    }
                );
            }

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
        let data = JSON.parse(req.body.data);
        let block;
        try {

            if (data.portfolio || data.stories || data.twitter) {
                // console.log(2)

                await Block.findByIdAndUpdate({_id: req.params.id}, data);
                res.status(201).json({
                    success: true
                })
            } else {
                if (data.video) {

                    if (req.files.length > 0 || data.videoText) {
                        console.log('aaa')
                        if (req.files.length > 0) {
                            if (candidate.video) {
                                fs.unlinkSync(`./admin/_uploads/block/${candidate.video}`);
                            }
                            block = {
                                video: req.files[0].filename,
                                videoText: data.videoText
                            };
                            console.log('block ', block)
                        } else {
                            block = {
                                videoText: data.videoText
                            }
                        }


                        await Block.findByIdAndUpdate({_id: req.params.id}, block);
                        res.status(201).json({
                            success: true
                        });
                    } else {
                        res.status(201).json({
                            msg: "Video empty"
                        });
                    }

                } else if (data.content) {
                    block = {
                        content: {
                            animation: data.content.animation,
                            animationText: data.content.animationText,
                            bgColor: data.content.bgColor,
                            bgSize: data.content.bgSize,
                            url: data.content.url,
                            image: candidate.content.image
                        }
                    };
                    if (req.files.length > 0) {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.content.image}`);
                        block.content.image = req.files[0].filename

                    }
                    // console.log(block)
                    await Block.findByIdAndUpdate({_id: req.params.id}, block);
                    res.status(201).json({
                        success: true
                    });
                } else if (data.gif) {
                    block = {
                        gif: {
                            bgColor: data.gif.bgColor,
                            gif: candidate.gif.gif,
                            mp3: candidate.gif.mp3,
                        }
                    };
                    if (req.files.length > 0) {

                        req.files.forEach(f => {
                            if (f.fieldname === 'gif') {
                                block.gif.gif = f.filename;
                                if (!block.gif.mp3) {
                                    block.gif.mp3 = candidate.gif.mp3
                                }
                                if (candidate.gif.gif) {
                                    fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.gif}`);
                                    fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.image}`);
                                }
                                gifFrames(
                                    {
                                        url: 'http://localhost:3000/uploads/block/' + f.filename,
                                        frames: '0',
                                        outputType: 'png',
                                        cumulative: true
                                    },
                                    function (err, frameData) {
                                        if (err) {
                                            throw err;
                                        }
                                        frameData.forEach(function (frame) {
                                            frame.getImage().pipe(fs.createWriteStream(
                                                './admin/_uploads/block/' + f.filename.split('.')[0] + '.png'
                                            ));
                                            block.gif.image = f.filename.split('.')[0] + '.png';
                                        });
                                    }
                                );
                            }
                            if (f.fieldname === 'mp3') {
                                block.gif.mp3 = f.filename;
                                if (!block.gif.gif) {
                                    block.gif.gif = candidate.gif.gif
                                }
                                if (candidate.gif.mp3) {
                                    fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.mp3}`);
                                }
                            }
                        });
                    }
                    console.log('block ', block);
                    await Block.findByIdAndUpdate({_id: req.params.id}, block);
                    res.status(201).json({
                        success: true
                    });
                }
            }
        } catch (e) {
            errors.conflictError(res, errors)
        }

    },
    deleteBlock: async (req, res) => {
        // console.log(req.params.id)
        let candidate = await Block.findOne({_id: req.params.id});
        if (candidate) {
            // console.log(candidate);
            try {
                if (candidate.video) {
                    console.log(candidate)
                    fs.unlinkSync(`./admin/_uploads/block/${candidate.video}`);
                } else if (candidate.content) {
                    if (candidate.content.image) {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.content.image}`);
                    }
                } else if (candidate.gif) {
                    if (candidate.gif.gif) {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.gif}`);
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.image}`);
                    }
                    if (candidate.gif.mp3) {
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.gif.mp3}`);
                    }
                }
                await Block.deleteOne({_id: req.params.id});
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
