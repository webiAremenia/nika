const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RemarkSchema = new Schema({
    title: {
        text: {
            type: String,
            default: 'Clients'
        },
        fontSize: {
            type: Number,
            default: 45
        },
        lineHeight: {
            type: Number,
            default: 61
        },
        fontFamily: {
            type: String,
            default: 'Open Sans Extrabold'
        }
    },
    description: {
        text: {
            type: String,
            default: 'We come to work everyday with one single goal - deliver greatness. We love finding simple solutions to complex'
        },
        fontSize: {
            type: Number,
            default: 26
        },
        lineHeight: {
            type: Number,
            default: 35
        },
        fontFamily: {
            type: String,
            default: 'Open Sans SemiBold'
        }
    },
});

module.exports = mongoose.model('Remark', RemarkSchema);
