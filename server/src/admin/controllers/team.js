const Introduce = require('../models/introduce');
const Client = require('../models/client');
const Remark = require('../models/remark');
const Leadership = require('../models/leadership');
const Award = require('../models/awards');
const Element = require('../models/element');
const errors = require('../_help/errorHandler');


module.exports = {
    getAll: async (req, res) => {
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

    },
    update: async (req, res) => {
        let candidate = req.query.id + '';

        let type = Object.keys(req.body)[0]; //introduce
        let field = Object.keys(req.body[Object.keys(req.body)[0]])[0];  //introduce.title

        if (type === 'introduce') {
            try {
                let upd = {};
                upd[field] = req.body[type][field];

                await Introduce.findByIdAndUpdate(
                    {_id: candidate},
                    {$set: upd},
                    {new: true});
                res.status(201).json({
                    success: true
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else if (type === 'element') {


            try {
                let upd = {};
                upd[field] = req.body[type][field];

                await Element.findByIdAndUpdate(
                    {_id: candidate},
                    {$set: upd},
                    {new: true});
                res.status(201).json({
                    success: true
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else if (type === 'client') {

            try {
                let upd = {};
                upd[field] = req.body[type][field];

                await Client.findByIdAndUpdate(
                    {_id: candidate},
                    {$set: upd},
                    {new: true});
                res.status(201).json({
                    success: true
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else if (type === 'remark') {

            try {
                let upd = {};
                upd[field] = req.body[type][field];

                await Remark.findByIdAndUpdate(
                    {_id: candidate},
                    {$set: upd},
                    {new: true});
                res.status(201).json({
                    success: true
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else if (type === 'leadership') {

            try {
                let upd = {};
                upd[field] = req.body[type][field];

                await Leadership.findByIdAndUpdate(
                    {_id: candidate},
                    {$set: upd},
                    {new: true});
                res.status(201).json({
                    success: true
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        } else if (type === 'awards') {

            try {
                let upd = {};
                upd[field] = req.body[type][field];

                await Award.findByIdAndUpdate(
                    {_id: candidate},
                    {$set: upd},
                    {new: true});
                res.status(201).json({
                    success: true
                })
            } catch (e) {
                errors.invalidData(res, errors);
            }
        }

    },


};
