import express from 'express';
import controller from '../controllers/buy';

const router = express.Router();

router.get('/buy', controller.buy);

export = router;