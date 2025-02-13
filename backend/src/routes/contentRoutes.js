import express from 'express';
import { getContent, addContent } from '../controllers/contentController.js';

const router = express.Router();

router.get('/', getContent);
router.post('/', addContent);

export default router;