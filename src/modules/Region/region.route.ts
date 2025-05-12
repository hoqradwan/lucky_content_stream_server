import express from 'express';
import { adminMiddleware } from '../../middlewares/auth';
import { createRegion, getRegions } from './region.controller';
const router = express.Router();

router.post('/', adminMiddleware("admin", "creator"), createRegion);
router.get('/', adminMiddleware("admin", "creator"), getRegions);


export const RegionRoutes = router;