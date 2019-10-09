const express = require('express');
const router = express.Router();
const controller = require('../controllers/settings');

router.get('/', controller.getSettings);
router.get('/:key', controller.getByKey);


module.exports = router;
