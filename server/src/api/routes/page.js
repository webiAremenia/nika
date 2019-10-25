const express = require('express');
const router = express.Router();
const controller = require('../controllers/page');


router.get('/', controller.getAll);
router.get('/:key', controller.getOne);


module.exports = router;
