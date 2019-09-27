const Contact = require('../models/contact');
const errors = require('../_help/errorHandler');

module.exports = {
    getAll: async (req, res) => {
        try {
            let contacts = await Contact.find({});
            res.status(201).json({
                contacts: contacts,
            })
        } catch (e) {
            errors.notFound(res, errors);
        }


    },
    update: async (req, res) => {
        let candidate = req.query.id + '';


        let type = Object.keys(req.body)[0]; //introduce

        let upd = {};
        upd[type] = req.body[type];




        try {

            await Contact.findByIdAndUpdate(
                {_id: candidate},
                {$set: upd},
                {new: true});
            res.status(201).json({
                success: true
            })
        } catch (e) {
            errors.invalidData(res, errors);
        }

    },


};
