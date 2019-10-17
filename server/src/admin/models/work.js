const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    // title: {
    //     type: String,
    //     default: ''
    // },

    title: {
        text: {
            type: String,
        },
        fontSize: {
            type: Number,
        },
        fontFamily: {
            type: String,
        }
    },

    subTitle: {
        text: {
            type: String,
        },
        fontSize: {
            type: Number,
        },
        fontFamily: {
            type: String,
        }
    },
    description: {
        text: {
            type: String,
        },
        fontSize: {
            type: Number,
        },
        fontFamily: {
            type: String,
        }
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: Object
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Work', WorkSchema);
