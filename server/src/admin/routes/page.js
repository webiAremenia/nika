const express = require('express');
const router = express.Router();
const controller = require('../controllers/page');
const jwtCompare = require('../middleware/jwtCompare');
const uploadImg = require('../middleware/multer');


router.post('/ckeditor', uploadImg.single('image'), controller.ckEditorAddImage);


router.use('/', jwtCompare);
router.get('/', controller.getPages);

router.post('/',uploadImg.single('image') ,controller.addPage);
router.post('/ckeditor',uploadImg.single('image'), controller.ckEditorAddImage);
router.put('/',uploadImg.single('image'), controller.changePage);

router.delete('/ckeditor',controller.ckEditorDeleteImage);

router.delete('/', controller.deletePage);

module.exports = router;
