module.exports = [
     errorHandler = (res, e) => {
        res.status(500).json({
            error: e.message
        });
    },
    idSubscriber = (req) => {
        return req.userData ? req.userData.userId : req.params.userId ;
    }
];

// exports.errorHandler = (res, e) => {
//     res.status(500).json({
//         error: e.message
//     });
// };
//
// exports.idSubscriber = (req) => {
//     return req.userData ? req.userData.userId : req.params.userId ;
// };
