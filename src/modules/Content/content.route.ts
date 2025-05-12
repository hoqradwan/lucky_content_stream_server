import { Router } from 'express';
import {  createContent } from './content.controller';
import { adminMiddleware } from '../../middlewares/auth';

const router = Router();

// Route to get all content
// router.get('/', getContent);

// Route to create new content
router.post('/',adminMiddleware("admin","creator"), createContent);

// // Route to update existing content
// router.put('/:id', updateContent);

// // Route to delete content
// router.delete('/:id', deleteContent);

export const contentRoutes = router;