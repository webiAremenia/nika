const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
    name: {type: String},
    size: {type: String},
    type: {type: String},
    portfolio: {type: Schema.Types.ObjectId, ref: 'Portfolio'},
    stories: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    video: {type: String},
    content: {type: Object},
    bgColor : {type : String}
});

module.exports = mongoose.model('Block', BlockSchema);
