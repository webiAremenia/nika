const express = require('express');
const router = express.Router();
const controller = require('../controllers/group');
// const jwtCompare = require('../middleware/jwtCompare');
//
//
// router.use('/', jwtCompare);

router.get('/', controller.getGroup);
router.post('/', controller.addLine);
router.put('/:id', controller.updatePosition);
router.delete('/:id', controller.deleteLine);



module.exports = router;
