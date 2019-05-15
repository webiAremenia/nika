const Block = require('../models/block');
const errors = require('../_help/errorHandler');
const fs = require('fs');
const sharp = require('sharp');

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
        // console.log(req.body);
        const data = JSON.parse(req.body.data);
        // console.log(JSON.parse(req.body.data))
        try {
            // console.log(data.portfolio.project)
            // console.log(data.stories.settings)
            const block = {
                name: data.name,
                size: data.size,
                type: data.type,
                bgColor : null,
                portfolio: data.portfolio ? data.portfolio.project : null,
                stories: data.stories && data.stories.settings.length > 0 ? data.stories.settings : null,
                video : null,
                content: data.content ? {
                    image: req.files[0].filename,
                    mp3: req.files[1] ? req.files[1].filename: null,
                    animation: data.content.animation,
                    animationText: data.content.animationText,
                    bgColor: data.content.bgColor,
                    bgSize: data.content.bgSize,
                    url: data.content.url
                } : null
            };
            if(req.files.length > 0){
                if(req.files[0].fieldname === 'video'){
                    block.video = req.files[0].filename;
                }
            }
            if(data.portfolio){
                console.log(data.portfolio.bgColor)
                block.bgColor = data.portfolio.bgColor
            }else if(data.stories){
                console.log(data.stories.bgColor)
                block.bgColor = data.stories.bgColor
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
        console.log(data);
        try {
            // console.log(1)

            if (data.portfolio || data.stories) {
                // console.log(2)

                await Block.findByIdAndUpdate({_id: req.params.id}, data);
                res.status(201).json({
                    success: true
                })
            } else {
                // if (data.video) {
                //     // console.log(3)
                //     // console.log(req.files);
                //     if (req.files.length > 0) {
                //         fs.unlinkSync(`./admin/_uploads/block/${candidate.video}`);
                //         block = {
                //             video: req.files[0].filename
                //         };
                //         await Block.findByIdAndUpdate({_id: req.params.id}, block);
                //         res.status(201).json({
                //             success: true
                //         });
                //     } else {
                //         res.status(201).json({
                //             msg: "Video empty"
                //         });
                //     }
                //
                // } else if (data.content) {
                //     // console.log(4)
                //     block = {
                //         content: {
                //             animation: data.content.animation,
                //             animationText: data.content.animationText,
                //             bgColor: data.content.bgColor,
                //             bgSize: data.content.bgSize,
                //             url: data.content.url,
                //         }
                //     };
                //     if (req.files.length > 0) {
                //         // console.log('++++');
                //
                //         req.files.forEach(f => {
                //             if (f.fieldname === 'image') {
                //                 block.content.image = f.filename;
                //                 if (!block.content.mp3) {
                //                     block.content.mp3 = candidate.content.mp3
                //                 }
                //                 if (candidate.content.image) {
                //                     console.log('123456789')
                //                     fs.unlinkSync(`./admin/_uploads/block/${candidate.content.image}`);
                //                 }
                //                 // console.log('++++');
                //
                //             }
                //             if (f.fieldname === 'mp3') {
                //                 block.content.mp3 = f.filename;
                //                 // console.log('----');
                //                 if (!block.content.image) {
                //                     block.content.image = candidate.content.image
                //                 }
                //                 if (candidate.content.mp3) {
                //                     fs.unlinkSync(`./admin/_uploads/block/${candidate.content.mp3}`);
                //                 }
                //             }
                //         });
                //     }
                //     // console.log(block)
                //     await Block.findByIdAndUpdate({_id: req.params.id}, block);
                //     res.status(201).json({
                //         success: true
                //     });
                // }
            }
        } catch (e) {
            errors.conflictError(res, errors)
        }

    },
    deleteBlock: async (req, res) => {
        // console.log(req.params.id)
        let candidate = await Block.findOne({_id: req.params.id});
        if (candidate) {
            console.log(candidate);
            try {
                if(candidate.video){
                    fs.unlinkSync(`./admin/_uploads/block/${candidate.video}`);
                }else if(candidate.content){
                   if(candidate.content.image){
                       fs.unlinkSync(`./admin/_uploads/block/${candidate.content.image}`);
                   }
                    if(candidate.content.mp3){
                        fs.unlinkSync(`./admin/_uploads/block/${candidate.content.mp3}`);
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
