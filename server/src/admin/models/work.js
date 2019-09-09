const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    details : {
        type: Object
    },
    created : {
        type: Date,
        default: Date.now()
    },
    updated : {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Work', WorkSchema);
