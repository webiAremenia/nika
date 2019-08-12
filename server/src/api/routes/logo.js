const express = require('express');
const router = express.Router();
const controller = require('../controllers/logo');


router.get('/', controller.getLogos);

module.exports = router;
