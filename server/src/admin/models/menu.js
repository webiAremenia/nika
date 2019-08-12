const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    isActive : {
        type: Boolean,
        default : true
    }
});

module.exports = mongoose.model('Menu', MenuSchema);
