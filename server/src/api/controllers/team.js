const Introduce = require('../../admin/models/introduce');
const Client = require('../../admin/models/client');
const Remark = require('../../admin/models/remark');
const Leadership = require('../../admin/models/leadership');
const Award = require('../../admin/models/awards');
const Element = require('../../admin/models/element');
const errors = require('../_helper/error_handler');


module.exports = {
    getTeam: async (req, res) => {

        try {
            let introduces = await Introduce.find({});
            let clients = await Client.find({});
            let remarks = await Remark.find({});
            let leaderships = await Leadership.find({});
            let awards = await Award.find({});
            let elements = await Element.find({});

            res.status(201).json({
                introduces: introduces,
                clients: clients,
                remarks: remarks,
                leaderships: leaderships,
                awards: awards,
                elements: elements
            })
        } catch (e) {
            errors.notFound(res, errors);
        }
    }
};
