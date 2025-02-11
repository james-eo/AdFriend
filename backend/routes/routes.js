import express from 'express';
import userRoutes from './routes/userRoutes';
import contentRoutes from './routes/contentRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/content', contentRoutes);

export default router;