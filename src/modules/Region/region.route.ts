import express from 'express';
import { adminMiddleware } from '../../middlewares/auth';
const router = express.Router();

router.post('/',adminMiddleware("admin"),);


export const regionRoutes = router;