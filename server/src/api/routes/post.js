const express = require('express');
const router = express.Router();
const controller = require('../controllers/posts');


router.get('/get-many/:arr', controller.getMany);
router.get('/:id', controller.getPost);
router.get('/', controller.getPosts);


module.exports = router;
