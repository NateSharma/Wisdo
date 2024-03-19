import express from 'express';
import { addCommunity } from '../controllers/communityController';

const router = express.Router();

router.post('/add-community', addCommunity);

export default router;
