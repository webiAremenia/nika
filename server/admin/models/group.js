const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
    position: String,
    middleBlock: {
        count: Number,
        blocks: [{
            size: String,
            block: {type: mongoose.Schema.ObjectId, ref: 'Block'},
            name: String
        }]
    },
    largeBlock: {
        count: Number,
        blocks: [{
            size: String,
            block: {type: mongoose.Schema.ObjectId, ref: 'Block'},
            name: String
        }]
    },
});

module.exports = mongoose.model('Group', Group);