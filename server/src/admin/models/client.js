const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let createClientBlocks = () => {
    let arr = [];
    for (let i = 0; i < 12; ++i) {
        arr.push({
            backGround: 'assets/images/AboutUs/intel.png',
            hover : {
                text: 'Hover text Client',
                fontSize: 14,
                lineHeight: 25,
                fontFamily: 'Open Sans Regular',
            }
        });
        // if (i === 3) {
        //     arr.push({
        //         text: 'North American Lighting is a member of the Japan-based Koito Group of companies',
        //         fontSize: 14,
        //         lineHeight: 25,
        //         fontFamily: 'Open Sans Regular',
        //     });
        // }
    }

    return arr;

};

const ClientSchema = new Schema({
    title: {
        text: {
            type: String,
            default: 'Clients'
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
    blocks: {
        type: Array,
        default: createClientBlocks()
    }
});


module.exports = mongoose.model('Client', ClientSchema);
