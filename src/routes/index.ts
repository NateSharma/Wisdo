import express, { Request, Response, Router } from 'express';
import postRoutes from './postRoutes';
import userRoutes from './userRoutes';
import communiteRoute from './communityRoutes';

const router: Router = express.Router();

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/community', communiteRoute);

export default router;
