const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolio');


router.get('/', controller.getPortfolio);
router.get('/:id', controller.getOne);


module.exports = router;
