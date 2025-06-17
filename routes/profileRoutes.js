import express from "express";
import {
  upsertProfile,
  getProfileByStudent,
  deleteProfile
} from "../controllers/profileController.js";

const router = express.Router();

// POST or PUT: create/update profile
router.post("/upsert/:studentId", upsertProfile);

// GET: get profile by student ID
router.get("/:studentId", getProfileByStudent);

// DELETE: remove profile by student ID
router.delete("/:studentId", deleteProfile);

export default router;
