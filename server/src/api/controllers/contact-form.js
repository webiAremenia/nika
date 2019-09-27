const Contact = require('../../admin/models/contact');
const errors = require('../_helper/error_handler');


module.exports = {
    getContact: async (req, res) => {
        try {
            let contacts = await Contact.find({}).sort('order');
            res.status(201).json({
                contacts: contacts,
            })
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
