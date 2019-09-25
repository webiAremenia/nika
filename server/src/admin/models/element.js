const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let createElementBlocks = () => {
    let arr = [];

    for (let i = 0; i < 5; ++i) {
        arr.push({
            title: {
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                fontSize: 36,
                lineHeight: 30,
                fontFamily: 'Open Sans Extrabold',
            },
            description: {
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                fontSize: 36,
                lineHeight: 30,
                fontFamily: 'Open Sans Extrabold',
            }
        });
    }

    return arr;
};

const ElementSchema = new Schema({
    title: {
        text: {
            type: String,
            default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
    blocks: {
        type: Array,
        default: createElementBlocks()
    }
});


module.exports = mongoose.model('Element', ElementSchema);
