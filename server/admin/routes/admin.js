const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');


const auth = require('./auth'),
    posts = require('./posts'),
    sliders = require('./sliders'),
    medias = require('./medias');

router.use('/post', posts);
router.use('/slider', sliders);
router.use('/media', medias);
router.use('/auth', auth);

module.exports = router;
