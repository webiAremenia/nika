const jwt = require('jsonwebtoken');
// const config = require('../config/configs');
import '../../../config/config';

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token;

        let admin = jwt.verify(token, global.gConfig.jwt_key);
        if (admin.role === 'supperAdmin') {
            req.adminId = admin.id;
            next();
        } else {
            return res.status(403).json({
                message: 'No accesses  !!!'
            });
        }
    } catch (e) {
        return res.status(401).json({
            msg: 'Have not permission ...'
        })
    }
};



















