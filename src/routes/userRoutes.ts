import express from 'express';
import { createUser } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/add-user',authMiddleware, createUser);

export default router;
