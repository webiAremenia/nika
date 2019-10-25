module.exports = {
    notFound: (res, err) => {
        res.status(404).json({
            msg: 'Not Found ...'
        })
    },
    invalidData: (res, err) => {
        res.status(500).json({
            msg: 'Invalid data ...'
        })
    },
    haventRole: (res, err) => {
        res.status(403).json({
            msg: 'Have not permission ...'
        })
    },
    userSaveError: (res, err) => {
        res.status(409).json({
            msg: "Server error User not added ..."
        })
    },
    conflictError: (res, err) => {
        res.status(409).json({
            msg: "Conflict error"
        })
    }
};
