const express = require('express');
const router = express.Router();
const controller = require('../controllers/block');
const jwtCompare = require('../middleware/jwtCompare');


router.use('/', jwtCompare);
router.get('/', controller.getBlock);
router.post('/',controller.addBlock);
router.put('/', controller.changeBlock);
router.delete('/', controller.deleteBlock);

module.exports = router;
