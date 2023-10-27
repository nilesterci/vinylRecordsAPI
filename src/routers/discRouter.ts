import express from 'express';
import discController from '../controllers/discController';

const router = express.Router();

router.get('/', discController.getDisc);
router.post('/', discController.postDisc);
router.delete('/', discController.deleteDisc);

export default router;