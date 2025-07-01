import express from "express";
import { handlePostUrl, handleRedirect, showExtraPage, showMainPage } from "../controllers/urlController.controller.js";

const router = express.Router();

router.get("/", showMainPage);
router.post("/", handlePostUrl);
router.get("/extra", showExtraPage);
router.get("/:id", handleRedirect);

export default router;
