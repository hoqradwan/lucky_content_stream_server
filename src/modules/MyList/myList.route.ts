import express from "express";
import { adminMiddleware } from "../../middlewares/auth";
import { addToMyList } from "./myList.controller";

const router = express.Router();

router.post('/', adminMiddleware("user"), addToMyList);

export const MyListRoutes = router;