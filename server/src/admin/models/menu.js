const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    // title: {
    //     type: String,
    //     required: true
    // },
    // description: {
    //     type: String
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

    order: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Menu', MenuSchema);
