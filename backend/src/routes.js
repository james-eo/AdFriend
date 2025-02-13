import express from 'express';
import userRoutes from './routes/userRoutes.js';
import contentRoutes from './routes/contentRoutes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/content', contentRoutes);

export default router;