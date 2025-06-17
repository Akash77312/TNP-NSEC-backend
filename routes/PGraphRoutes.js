import express from "express";
import { getPGraph, createPGraph } from "../controllers/PGraphController.js";

const router = express.Router();

router.get("/graph", getPGraph);
router.post("/graph", createPGraph);

export default router;
