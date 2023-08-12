import express from 'express';
import discController from '../controllers/discController';

const router = express.Router();

router.get('/', discController.getDisc);
router.post('/', discController.postDisc);

export default router;