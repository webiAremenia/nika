const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
    size: {
        type: 'String'
    },
    type: {
        type: 'String'
    },
    block: {
        post: [{
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }]
    },
    video: {
        url: {
            type: 'String'
        }
    },
    image: {
        img: {
            type: 'String'
        },
        size: {
            type: 'String'
        },
        bgcolor: {
            type: 'String'
        },
        hovertext: {
            type: 'String'
        },
        url: {
            type: 'String'
        }
    },
    imagetext: {
        subTitle: {
            type: 'String'
        },
        title: {
            type: 'String'
        },
        description: {
            type: 'String'
        },
        img: {
            type: 'String'
        },
        url: {
            type: 'String'
        }
    }
});

module.exports = mongoose.model('Block', BlockSchema);
