const Menu = require('../models/menu');
const errors = require('../_help/errorHandler');
const waterfall = require('async-waterfall');

module.exports = {
    getMenu: async (req, res) => {
        try {
            let candidates = await Menu.find({}).sort({order: 1});
            res.status(201).json(candidates)
        } catch (e) {
            errors.notFound(res, errors)
        }
    },
    addMenu: async (req, res) => {

        try {
            await new Menu(req.body).save();
            res.status(201).json({
                msg: "Menu has created successfully ..."
            })
        } catch (e) {
            errors.conflictError(res, e)
        }

        // let candidate = await Menu.findOne({title: req.body.title});
        // if (!candidate) {
        //     let data = await Menu.find({});
        //     let order = 0;
        //     data.forEach(menItem => {
        //         if (order < menItem.order) {
        //             order = menItem.order
        //         }
        //     });
        //     order = order + 1;
        //
        //     let menu = {
        //         title: req.body.title,
        //         type: req.body.type,
        //         order: order
        //     };
        //     req.body.type !== 'url' ? menu.typeId = req.body.typeId : menu.url = req.body.url;
        //     try {
        //         await new Menu(menu).save();
        //         res.status(201).json({
        //             msg: "Menu has created successfully ..."
        //         })
        //     } catch (e) {
        //         errors.userSaveError(res, errors)
        //     }
        // } else {
        //     errors.conflictError(res, errors)
        // }
    },
    changeMenu: async (req, res) => {

        let menu = {
            order: req.body.order,
            title: JSON.parse(req.body.title),
            description: JSON.parse(req.body.description),
            isActive: req.body.isActive,
        };
        if (req.body.key) {
            menu.key = req.body.key;
        }
        try {
            await Menu.findByIdAndUpdate(
                {_id: req.query.id},
                {$set: menu},
                {new: true});
            res.status(201).json(menu)
        } catch (e) {
            errors.invalidData(res, errors);
        }
    },
    deleteMenu: async (req, res) => {
        let menu = req.query.id + '';
        let candidate = await Menu.findOne({_id: menu});
        if (candidate) {
            try {
                await Menu.remove({_id: menu});
                res.status(201).json({
                    msg: 'Menu has removed successfully'
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else {
            errors.notFound(res, errors);
        }
    },
    sortMenu: async (req, res) => {
        let candidates = req.body;

        try {
            for (let i = 0; i < req.body.length; ++i) {
                await Menu.updateOne({_id: req.body[i]}, {$set: {order: i}});
            }
            res.status(201).json({
                msg: 'Menu has removed successfully'
            })
        } catch (e) {
            errors.notFound(res, e);

        }

        // waterfall([
        //     async function (callback) {
        //         for (let i = 0; i < candidates.length; ++i) {
        //             let item = candidates[i];
        //             let menu = await Menu.findOne({_id: item._id});
        //             menu.order = item.order;
        //             await Menu.findByIdAndUpdate(
        //                 {_id: menu._id + ''},
        //                 {$set: menu},
        //                 {new: true});
        //         }
        //         callback(null);
        //     },
        //     function () {
        //         res.status(201).json({})
        //     }
        // ], function (err, result) {
        // });
    }
};


