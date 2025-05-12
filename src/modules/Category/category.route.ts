import express from 'express';
import { adminMiddleware } from '../../middlewares/auth';
import { createCategory, getCategories } from './category.controller';
const router = express.Router();

router.post('/', adminMiddleware('admin'),createCategory);
router.get('/',adminMiddleware('admin','creator','user'), getCategories);
// router.get('/:id', getCategoryById);

export const CategoryRoutes = router;