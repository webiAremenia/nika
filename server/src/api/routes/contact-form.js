const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact-form');


router.get('/', controller.getContact);


module.exports = router;
