const express = require('express');
const router = express.Router();
const controller = require('../controllers/block');
const jwtCompare = require('../middleware/jwtCompare');
const upload = require('../middleware/multer');


router.use('/', jwtCompare);
router.get('/', controller.getBlock);
router.post('/', upload.single('image'), upload.single('mp3'), controller.addBlock);
router.put('/:id', upload.single('image'), upload.single('mp3'), controller.changeBlock);
// router.delete('/', controller.deleteBlock);

module.exports = router;
