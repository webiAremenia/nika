const path = require('../../config').viewPath;

exports.actionIndex = (req, res, next) => {
    console.log('hello');
    res.render(`${path}index`,{});
};
