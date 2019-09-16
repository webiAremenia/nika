const User = require('../models/user');
const errors = require('../_help/errorHandler');
const jwt = require('jsonwebtoken');
// const config = require('../config/configs');
import '../../../config/config';

const jwtCompare = require('../middleware/jwtCompare');
const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {

        try {
            let candidate = await User.findOne({username: req.body.username});
            if (candidate) {
                await bcrypt.compare(req.body.password, candidate.password, (err, result) => {
                    if (err) {
                        return res.status(203).json({
                            success: false,
                            msg: 'Incorrect Login or Password'
                        });
                    }
                    if (result) {
                        let user = {
                            username: candidate.username,
                            email: candidate.email,
                            role: candidate.role,
                            id: candidate.id
                        };
                        let data = jwt.sign(user, global.gConfig.jwt_key, {expiresIn: '4h'});
                        res.status(201).json({
                            token: data,
                            user: user
                        })
                    } else {
                        return res.status(203).json({
                            success: false,
                            msg: 'Incorrect Login or Password'
                        });
                    }
                })

            } else {
                return res.status(203).json({
                    success: false,
                    msg: 'Incorrect Login or Password'
                });
            }

        } catch (e) {
            console.log(e)
        }

    },
    reg: async (req, res) => {
        if (req.headers.token ? jwtCompare(req.headers.token) : null) {
            let data = {
                email: req.body.newuser.email,
                password: req.body.newuser.password,
                username: req.body.newuser.username,
                role: req.body.newuser.username ? req.body.newuser.username : 'stuff',
            };
            try {
                await new User(data).save();
                res.status(201).json({
                    msg: 'User added successfully'
                })
            } catch (e) {
                errors.userSaveError(res, errors);
            }
        } else {
            errors.haventRole(res, errors);
        }
    }
};
