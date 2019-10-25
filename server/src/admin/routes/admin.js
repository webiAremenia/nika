const express = require('express');
const router = express.Router();


const auth = require('./auth'),
    posts = require('./post'),
    pages = require('./page'),
    sliders = require('./slider'),
    logo = require('./logo'),
    portfolio = require('./portfolio'),
    settings = require('./settings'),
    menu = require('./menu'),
    vacancy = require('./vacancy'),
    block = require('./block'),
    medias = require('./media'),
    group = require('./group'),
    work = require('./work'),
    profile = require('./profile'),
    contact = require('./contact'),
    team = require('./team');

router.use('/post', posts);
router.use('/page', pages);
router.use('/vacancy', vacancy);
router.use('/block', block);
router.use('/slider', sliders);
router.use('/logo', logo);
router.use('/media', medias);
router.use('/auth', auth);
router.use('/settings', settings);
router.use('/menu', menu);
router.use('/portfolio', portfolio);
router.use('/group', group);
router.use('/profile', profile);
router.use('/work', work);
router.use('/team', team);
router.use('/contact', contact);

module.exports = router;
