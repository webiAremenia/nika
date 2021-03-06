const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
    key: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        required: true
    },
    random: String
});

module.exports = mongoose.model('Page', PageSchema);

module.exports.findByKey = (key, pages) => {
    return pages.find(p => {
        return p.key === key
    });
};
