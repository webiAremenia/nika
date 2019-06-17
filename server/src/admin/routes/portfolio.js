const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolio');
const jwtCompare = require('../middleware/jwtCompare');
const uploadImg = require('../middleware/multer');


router.use('/', jwtCompare);
router.get('/', controller.getPortfolio);
router.get('/:id', controller.getPortfolioById);
router.post('/ckeditor',uploadImg.single('image'), controller.ckEditorAddImage);
router.post('/',uploadImg.array('images') ,controller.addPortfolio);
router.put('/',uploadImg.array('images'), controller.changePortfolio);
router.delete('/ckeditor',controller.ckEditorDeleteImage);
router.delete('/ck/:dir', controller.deleteNoEmptyDir);
router.delete('/', controller.deletePortfolio);

module.exports = router;
