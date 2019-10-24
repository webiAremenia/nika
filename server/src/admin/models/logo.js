const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: Schema.Types.ObjectId,
        ref: 'Media',
    },
    bgColor : {
        type : String
    }
});

module.exports = mongoose.model('Logo', LogoSchema);
