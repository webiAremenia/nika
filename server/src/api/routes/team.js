const express = require('express');
const router = express.Router();
const controller = require('../controllers/team');


router.get('/', controller.getTeam);


module.exports = router;
