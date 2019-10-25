const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');
const jwtCompare = require('../middleware/jwtCompare');


router.use('/', jwtCompare);
router.get('/', controller.getAll);
router.put('/', controller.update);

module.exports = router;
