const express = require('express');
const router = express.Router();
const controller = require('../controllers/logo');
const jwtCompare = require('../middleware/jwtCompare');
const uploadImg = require('../middleware/multer');


router.use('/', jwtCompare);
router.get('/', controller.getLogos);
router.get('/media', controller.getMedia);
router.post('/', controller.addLogo);
router.put('/' , controller.changeLogo);
router.delete('/', controller.deleteLogo);

module.exports = router;
