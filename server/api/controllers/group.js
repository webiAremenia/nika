const Group = require('../../admin/models/group');

module.exports = {
    getGroup(req, res, next) {
        Group.find()
            .populate('middleBlock.blocks.block')
            .populate('largeBlock.blocks.block')
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
};