const Menu = require('../../admin/models/menu');
const Settings = require('../../admin/models/settings');
const errors = require('../_helper/error_handler');


module.exports = {
    getMenu: async (req, res) => {
        try {
            let candidates = await Menu.find({});
            let menu = {};

            candidates.forEach(m => {
                menu[m.key] = {
                    title: m.title,
                    description: m.description,
                    isActive: m.isActive,
                    order: m.order,
                    value: m.value,
                };
            });

            res.status(201).json({
                menu: menu
            })
        } catch (e) {
            errors.notFound(res, errors)
        }
    },
    getMenuText: async (req, res) => {
        try {
            let text = await Settings.findOne({key: 'menu text'});
            res.status(200).json(text.value)
        } catch (e) {
            errors.notFound(res, errors)
        }
    }
};
