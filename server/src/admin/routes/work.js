const express = require('express');
const router = express.Router();
const controller = require('../controllers/work');
const jwtCompare = require('../middleware/jwtCompare');
const upload = require('../middleware/multer');


router.use('/', jwtCompare);
router.get('/', controller.getWork);
router.post('/', controller.addWork);
router.post('/video', upload.single('video'), controller.addVideo);
router.put('/video',upload.single('video'), controller.changeVideo);
router.put('/', controller.changeWork);
router.delete('/video/many', controller.deleteVideoMany);
router.delete('/video', controller.deleteVideo);
router.delete('/', controller.deleteWork);

module.exports = router;
