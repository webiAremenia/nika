const express = require('express');
const router = express.Router();
const controller = require('../controllers/group');


router.get('/', controller.getGroup);

module.exports = router;
