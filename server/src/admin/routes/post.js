const express = require('express');
const router = express.Router();
const controller = require('../controllers/posts');
const jwtCompare = require('../middleware/jwtCompare');
const uploadImg = require('../middleware/multer');


router.post('/ckeditor', uploadImg.single('image'), controller.ckEditorAddImage);


router.use('/', jwtCompare);
router.get('/', controller.getPosts);
<<<<<<< HEAD:server/src/admin/routes/post.js
router.post('/',uploadImg.single('image') ,controller.addPost);

router.post('/ckeditor',uploadImg.single('image'), controller.ckEditorAddImage);
router.put('/',uploadImg.single('image'), controller.changePost);
=======
router.post('/', uploadImg.single('image'), controller.addPost);


router.put('/', uploadImg.single('image'), controller.changePost);
>>>>>>> master:server/admin/routes/post.js
router.delete('/', controller.deletePost);

module.exports = router;
