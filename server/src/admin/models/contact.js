const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ContactSchema = new Schema({
    key: {type: String, required: true},
    order: {type: Number},
    title: {
        text: {
            type: String,
            default: 'New Business'
        },
        fontSize: {
            type: Number,
            default: 20
        },
        lineHeight: {
            type: Number,
            default: 20
        },
        fontFamily: {
            type: String,
            default: 'Open Sans Extrabold'
        }
    },
    description: {
        text: {
            type: String,
            default: 'Would you like us to speak at an event? Tell us about your event and what you want us to speak about.'
        },
        fontSize: {
            type: Number,
            default: 20
        },
        lineHeight: {
            type: Number,
            default: 20
        },
        fontFamily: {
            type: String,
            default: 'Open Sans SemiBold'
        }
    },
    buttonText: {
        text: {
            type: String,
            default: 'Submit'
        },
        fontSize: {
            type: Number,
            default: 20
        },
        lineHeight: {
            type: Number,
            default: 10
        },
        fontFamily: {
            type: String,
            default: 'Open Sans SemiBold'
        }
    },


});


module.exports = mongoose.model('Contact', ContactSchema);
