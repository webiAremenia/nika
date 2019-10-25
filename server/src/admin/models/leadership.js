const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadershipSchema = new Schema({
    title: {
        text: {
            type: String,
            default: 'Leadership'
        },
        fontSize: {
            type: Number,
            default: 65
        },
        lineHeight: {
            type: Number,
            default: 88
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
            default: 22
        },
        lineHeight: {
            type: Number,
            default: 35
        },
        fontFamily: {
            type: String,
            default: 'Open Sans Regular'
        }
    },
    first: {
        avatar: {
            type: String,
            default: 'assets/images/AboutUs/ayman_reduced@2x.png'
        },
        name: {
            text: {
                type: String,
                default: 'Ali Tassavor'
            },
            fontSize: {
                type: Number,
                default: 19
            },
            lineHeight: {
                type: Number,
                default: 25
            },
            fontFamily: {
                type: String,
                default: 'Open Sans Bold'
            }
        },
        job: {
            text: {
                type: String,
                default: 'CEO & Director Of Technology'
            },
            fontSize: {
                type: Number,
                default: 16
            },
            lineHeight: {
                type: Number,
                default: 25
            },
            fontFamily: {
                type: String,
                default: 'Open Sans Regular'
            },

        },
    },
    second: {
        avatar: {
            type: String,
            default: 'assets/images/AboutUs/ayman_reduced@2x.png'
        },
        name: {
            text: {
                type: String,
                default: 'Ayman Eshaghpour'
            },
            fontSize: {
                type: Number,
                default: 19
            },
            lineHeight: {
                type: Number,
                default: 25
            },
            fontFamily: {
                type: String,
                default: 'Open Sans Bold'
            }

        },
        job: {
            text: {
                type: String,
                default: 'Managing Partner & Creative Director'
            },
            fontSize: {
                type: Number,
                default: 16
            },
            lineHeight: {
                type: Number,
                default: 25
            },
            fontFamily: {
                type: String,
                default: 'Open Sans Regular'
            },
        },
    }
});

module.exports = mongoose.model('Leadership', LeadershipSchema);
