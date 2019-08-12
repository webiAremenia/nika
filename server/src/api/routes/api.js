const express = require('express');
const router = express.Router();


const posts = require('./post'),
    sliders = require('./slider'),
    logo = require('./logo'),
    medias = require('./media'),
    contact = require('./contact'),
    portfolio = require('./portfolio'),
    menu = require('./menu'),
    settings = require('./settings'),
    group = require('./group'),
    page = require('./page');

router.use('/post', posts);
router.use('/slider', sliders);
router.use('/logo', logo);
router.use('/media', medias);
router.use('/contact', contact);
router.use('/portfolio', portfolio);
router.use('/page', page);
router.use('/menu', menu);
router.use('/settings', settings);
router.use('/group', group);

module.exports = router;
