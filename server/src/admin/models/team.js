// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const TeamSchema = new Schema({
//     introduce: {type: mongoose.Schema.ObjectId, ref: 'Introduce'},
//     element: {
//         title: {
//             type: String,
//             default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//         },
//         blocks: {
//             type: Array
//         }
//     },
//     client: {
//         title: {
//             type: String,
//             default: 'Client'
//         },
//         description: {
//             type: String,
//             default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         },
//         blocks: {
//             type: Array
//         }
//     },
//     remark: {
//         title: {
//             type: String,
//             default: 'Client'
//         },
//         description: {
//             type: String,
//             default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         }
//     },
//     leadership: {
//         title: {
//             type: String,
//             default: 'Client'
//         },
//         description: {
//             type: String,
//             default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         },
//         first: {
//             avatar: {
//                 type: String,
//                 default: 'assets/images/AboutUs/ayman_reduced@2x.png'
//             },
//             name: {
//                 type: String,
//                 default: 'Ali Tassavor',
//             },
//             job: {
//                 type: String,
//                 default: 'CEO & Director Of Technology'
//             },
//
//         },
//         second: {
//             avatar: {
//                 type: String,
//                 default: 'assets/images/AboutUs/ayman_reduced@2x.png'
//             },
//             name: {
//                 type: String,
//                 default: 'Ayman Eshaghpour',
//             },
//             job: {
//                 type: String,
//                 default: 'Managing Partner & Creative Director'
//             },
//         }
//     },
//     awards: {
//         title: {
//             type: String,
//             default: 'Client'
//         },
//         description: {
//             type: String,
//             default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         },
//         first: {
//             type: Array,
//             default: ['3 gold', '2 silver', '1 bronze']
//         },
//         blocks: {
//             type: Array
//         }
//     }
// });
//
// module.exports = mongoose.model('Team', TeamSchema);
