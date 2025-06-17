import express from 'express'

import { getAllUsers } from "../controllers/adminController.js";
import { isAdmin, isAuthenticate } from "../middlewares/auth.js";

import {
  createJobApplication,
  getAllJobApplications,
  deleteJobApplication
} from "../controllers/jobApplicationController.js";

// bulk import
// import createMultipleJobApplication from "../controllers/jobApplicationController.js";
// import { createJobAnnouncements } from '../controllers/recruiterJAFController.js';

const router = express.Router();


router.get("/users", isAuthenticate, isAdmin, getAllUsers);
// bulk data set
// router.post("/bulk", createJobAnnouncements);



// POST new job
router.post("/create-job-application", createJobApplication);
// bulk data set
// router.post("/add-multiple", createMultipleJobApplications);

// GET all jobs
router.get("/all-jobs", getAllJobApplications);

// DELETE job by ID
router.delete("/:id", deleteJobApplication);

export default router;