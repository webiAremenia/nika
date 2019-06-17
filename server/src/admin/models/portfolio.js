const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    imgs: [{
        type: String,
        required: true
    }],
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    random: String
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
