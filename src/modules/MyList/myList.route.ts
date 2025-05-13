import express from "express";
import { adminMiddleware } from "../../middlewares/auth";
import { addToMyList, removeFromMyList } from "./myList.controller";

const router = express.Router();

router.post('/', adminMiddleware("user"), addToMyList);
router.post('/:id', adminMiddleware("user"), removeFromMyList);

export const MyListRoutes = router;