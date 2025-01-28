import express from "express";
import { humanizeText } from "../controllers/humanizeController.js";

const router = express.Router();

router.post("/", humanizeText);

export { router as humanizeRouter };
