import express from 'express';
import controller from '../controllers/buy';

const router = express.Router();

router.get('/buy', controller.buy);
router.get('/stop', controller.stop);

export = router;