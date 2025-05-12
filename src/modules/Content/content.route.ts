import { Router } from 'express';
import {  createContent, deleteContentById, getContentById, getContents } from './content.controller';
import { adminMiddleware } from '../../middlewares/auth';

const router = Router();

// Route to get all content

// Route to create new content
router.post('/',adminMiddleware("admin","creator"), createContent);
router.get('/', adminMiddleware("admin","user"), getContents);
router.get('/:id', adminMiddleware("admin","user"), getContentById);
router.post('/:id', deleteContentById);

// // Route to update existing content
// router.put('/:id', updateContent);

// // Route to delete content

export const contentRoutes = router;