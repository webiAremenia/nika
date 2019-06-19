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
    let obj = pages.find(p => {
        return p.key === key
    });
    return obj;
}
// function findByKey(key) {
//     let obj = pages.find(p => {
//         return p.key === key
//     });
//     return obj;
// }