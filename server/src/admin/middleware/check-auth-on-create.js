module.exports = function (req, res, next) {
    try {

        console.log(req.adminData.role)
        const role = req.adminData.role;
        if (role === 'superAdmin') {
            next();
        } else {
            return res.status(403).json({
                message: 'No accesses  !!!'
            });
        }
    } catch (e) {
        return res.status(401).json({
            message: 'Auth failed !'
        });
    }
};