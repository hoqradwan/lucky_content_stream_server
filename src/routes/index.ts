import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { TermsRoutes } from "../modules/Terms/Terms.route";
import { AboutRoutes } from "../modules/About/About.route";
import { PrivacyRoutes } from "../modules/privacy/Privacy.route";
import { NotificationRoutes } from "../modules/notifications/notification.route";
import { promoCodeRoutes } from "../modules/promoCode/promoCode.route";
import { feedBackRoutes } from "../modules/Feedback/feedback.route";
import { subscriptionRoutes } from "../modules/subscription/subscription.route";
import { paymentRoutes } from "../modules/payment/payment.route";
import { CategoryRoutes } from "../modules/Category/category.route";
import { GenreRoutes } from "../modules/Genre/genre.route";
import { RegionRoutes } from "../modules/Region/region.route";
import { MyListRoutes } from "../modules/MyList/myList.route";
import { contentRoutes } from "../modules/Content/content.route";

const router = express.Router();

router.use("/api/v1/user", UserRoutes);
router.use("/api/v1/content", contentRoutes);
router.use("/api/v1/myList", MyListRoutes);
router.use("/api/v1/region", RegionRoutes);
router.use("/api/v1/genre", GenreRoutes);
router.use("/api/v1/category", CategoryRoutes);
router.use("/api/v1/terms", TermsRoutes);
router.use("/api/v1/about", AboutRoutes);
router.use("/api/v1/privacy", PrivacyRoutes);
router.use("/api/v1/notification", NotificationRoutes);
router.use("/api/v1/cupon-code", promoCodeRoutes);
router.use("/api/v1/feedback", feedBackRoutes);
router.use("/api/v1/subscription", subscriptionRoutes);
router.use("/api/v1/purchase", paymentRoutes);

export default router;
