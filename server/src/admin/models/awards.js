const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let createAwardsBlocks = () => {
    let arr = [];
    for (let i = 0; i < 7; ++i) {
        arr.push('assets/images/AboutUs/awards-logo2@2x.png');
    }

    return arr;

};

let createAwardsFirst = () => {
    let arr = [];
    for (let i = 0; i < 3; ++i) {
        arr.push({
            text: '1 gold',
            fontSize: 14,
            lineHeight: 25,
            fontFamily: 'Open Sans Regular',
        });
    }

    return arr;

};

const AwardSchema = new Schema({
    title: {
        text: {
            type: String,
            default: 'Awards'
        },
        fontSize: {
            type: Number,
            default: 65
        },
        lineHeight: {
            type: Number,
            default: 80
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
            default: 45
        },
        fontFamily: {
            type: String,
            default: 'Open Sans Regular'
        }
    },
    first: {
        type: Array,
        default:createAwardsFirst()
    },
    blocks: {
        type: Array,
        default: createAwardsBlocks()
    }
});


module.exports = mongoose.model('Award', AwardSchema);
