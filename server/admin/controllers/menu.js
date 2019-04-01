const Menu = require('../models/menu');
const errors = require('../_help/error_handler');


module.exports = {
    getMenu: async (req,res) => {
        try {
            let candidates = await Menu.find({});
            res.status(201).json(candidates)
        } catch (e) {
            errors.notFound(res, errors)
        }
    },
    addMenu: async (req,res) => {
        console.log(req.body);
        let length = await Menu.find({});
        let menu = {
            title: req.body.title,
            url: req.body.url,
            type: req.body.type,
            typeId: req.body.typeId,
            order: length + 1
        };
        console.log(menu);
        try {
            await new Menu(menu).save();
            res.status(201).json({
                msg: "Menu has created successfully ..."
            })
        } catch (e) {
            errors.userSaveError(res, errors)
        }
    },
    changeMenu: async (req,res) => {
        let candidate = await Menu.findOne({_id: req.query.id + ''});
        if (candidate) {
            let menu = {
                title: req.body.title,
                url: req.body.url,
                type: req.body.type,
                typeId: req.body.typeId
            };
            try {
                await Menu.findByIdAndUpdate(
                    {_id: candidate._id},
                    {$set: menu},
                    {new: true});
                res.status(201).json(menu)
            } catch (e) {
                errors.invalidData(res, errors);
            }

        } else {
            errors.notFound(res, errors)
        }
    },
    deleteMenu: async (req,res) => {
        let menu = req.query.id + '';
        let candidate = await Menu.findOne({_id: menu});
        if (candidate) {
            try {
                await Media.remove({_id: menu});
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
    sortMenu: async (req,res) => {
        let candidates = req.body;
        candidates.forEach( async item => {
            let menu = await Menu.findOne({_id: item._id});
            menu.order = item.order;
            try {
                await Menu.findByIdAndUpdate(
                    {_id: menu._id},
                    {$set: menu},
                    {new: true});
                res.status(201).json(menu)
            } catch (e) {
                errors.invalidData(res, errors);
            }
        })
    }
};
