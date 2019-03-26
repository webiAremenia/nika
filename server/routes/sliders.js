const express = require('express');
const router = express.Router();
const controller = require('../controllers/sliders');
const jwtCompare = require('../middleware/jwtCompare');
const uploadImg = require('../middleware/multer');


router.use('/', jwtCompare);
router.get('/', controller.getSliders);
router.post('/',uploadImg.array('images') ,controller.addSlider);
router.put('/',uploadImg.array('images'), controller.changeSlider);
router.delete('/', controller.deleteSlider);

module.exports = router;
