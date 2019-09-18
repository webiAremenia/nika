const express = require('express');
const router = express.Router();
const controller = require('../controllers/work');


router.get('/', controller.getAll);
router.get('/:slug', controller.getOne);


module.exports = router;
