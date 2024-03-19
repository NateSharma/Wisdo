import express from 'express';
import { uploadPost, getFeed } from '../controllers/postController';
import dummyAuthMiddleware from '../middleware/authMiddleware'
 
const router = express.Router();

router.post('/add-post',dummyAuthMiddleware, uploadPost);
router.get('/get-post/:id', getFeed);

export default router;
