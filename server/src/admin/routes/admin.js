import express from 'express';
import controller from '../controller/admin';


const router = express.Router();


router.get('/', controller.actionIndex);

module.exports = router;
