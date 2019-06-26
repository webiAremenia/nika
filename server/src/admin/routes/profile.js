const express = require('express');
const router = express.Router();
const controller = require('../controllers/profile');
const jwtCompare = require('../middleware/jwtCompare');


router.use('/', jwtCompare);
router.post('/', controller.changePassword);

module.exports = router;
