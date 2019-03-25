const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
       },
    alt: {
        type: String,
        default: ""
    },
    created: {
        type: Date,
        default: new Date().toLocaleDateString(),
    },
    updated: {
        type: Date,
        default: new Date().toLocaleDateString()
    }
});

module.exports = mongoose.model('posts', PostSchema);
