const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
    position: String,
    middleBlock: [{type: mongoose.Schema.ObjectId, ref: 'Blocks'}],
    largeBlock: [{type: mongoose.Schema.ObjectId, ref: 'Blocks'}],
});

module.exports = mongoose.model('Group', Group);