const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntroduceSchema = new Schema({
    title: {
        // type: Object,
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
    description: {
        // type: Object,
        text: {
            type: String,
            default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
    backgroundImage: {
        type: String,
        default: 'assets/images/AboutUs/chair-octopus@2x.png'
    }
});

module.exports = mongoose.model('Introduce', IntroduceSchema);
