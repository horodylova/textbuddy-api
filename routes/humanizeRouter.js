import express from "express";
import humanizeController from "../controllers/humanizeController.js";

const router = express.Router();

router.post("/", humanizeController);

export { router as humanizeRouter };
