import express from 'express';
import { adminMiddleware } from '../../middlewares/auth';
import { createGenre, getAllGenre } from './genre.controller';
import { get } from 'mongoose';
const router = express.Router();


router.post('/', adminMiddleware('admin', 'creator'), createGenre)
router.get('/', adminMiddleware('admin', 'creator'), getAllGenre)
export const regionRoutes = router;