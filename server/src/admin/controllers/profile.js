const User = require('../models/user');
const errors = require('../_help/errorHandler');
const bcrypt = require('bcrypt');

module.exports = {
    changePassword: async (req, res) => {
        try {
            const admin = await User.findOne({_id: req.adminId});
            if (admin) {
                bcrypt.compare(req.body.old, admin.password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            success: false,
                            message: 'Auth failed'
                        });
                    } else if (result) {
                        bcrypt.hash(req.body.new, bcrypt.genSaltSync(10), (err, hash) => {
                            if (err) {

                                errors.notFound(res, errors);
                            } else {

                                admin.password = hash;
                                admin.save();
                                res.status(201).json({
                                    msg: 'Change Success',
                                    success : true
                                })
                                // admin.save()
                                //     .then(result => {
                                //         return res.status(200).json({success: true, message: 'password updated !'});
                                //     })
                                //     .catch(e => helper.errorHandler(res, e));
                            }
                        });
                    }else{
                        admin.save();
                        res.status(200).json({
                            msg: 'Incorrect password'
                        })
                    }
                })
            } else {
                console.log('Password eror')
                res.status(200).json({
                    msg: 'Auth filed'
                })
            }

        } catch (e) {
            errors.notFound(res, errors);
        }
    }

};
