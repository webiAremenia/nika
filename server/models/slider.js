const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SliderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    img: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('sliders', SliderSchema);
