const Group = require('../models/group');
const helper = require('../_help/errorHandler');

module.exports = {
    addLine(req, res, next) {
        const group = new Group({
            position: req.body.position,
            middleBlock: [],
            largeBlock: []
        });
        group.save()
            .then(line => {
                res.status(201).json(line)
            })
            .catch(e => helper.conflictError(res, e))
    },
    getGroup(req, res, next) {
        Group.find()
            .exec()
            .then(group => {
                res.status(200).json(
                    group.map(g => {
                        return {
                            id: g._id,
                            position: g.position,
                            middleBlock: g.middleBlock,
                            largeBlock: g.largeBlock
                        }
                    })
                );
            })
            .catch(e => helper.conflictError(res, e))
    },
    updatePosition(req, res, next) {
        const obj = {position: req.body.position};
        Group.findOneAndUpdate({_id: req.params.id}, obj)
            .exec()
            .then(r => {
                if (r) {
                    res.status(200).json({success: true});
                } else {
                    helper.notFound(res, 'err')
                }

            })
            .catch(e => helper.invalidData(res, e))
    },
    deleteLine(req, res, next) {
        Group.findOneAndDelete({_id: req.params.id})
            .exec()
            .then(r => {
                if(r) {
                    res.status(200).json({success: true})
                } else{
                    helper.notFound(res, r)
                }
            })
            .catch(e => helper.invalidData(res, e))
    }

};