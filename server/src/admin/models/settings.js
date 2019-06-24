const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Settings', SettingsSchema);

module.exports.findByKey = (key, pages) => {
    return pages.find(p => {
        return p.key === key
    });
};
