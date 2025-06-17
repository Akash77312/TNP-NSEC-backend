import { JobApplication } from "../models/JobApplication.js"
import {sendEmailToAllUsers}  from '../config/sendJobApplicationEmail.js'
// Create Job Application
export const createJobApplication = async (req, res) => {
    console.log("Hello")
  try {
    const jobData = req.body;

    const job = new JobApplication(jobData);
    await job.save();
    // await sendEmailToAllUsers(job);
    res.status(201).json({ message: "Job application created", job });
  } catch (error) {
    console.error("Create Job Error:", error);
    res.status(500).json({ message: "Failed to create job application" });
  }
};
// Create multiple job applications  bulk
// export const createMultipleJobApplications = async (req, res) => {
//   try {
//     const applications = req.body; // expecting an array of job objects
//     if (!Array.isArray(applications)) {
//       return res.status(400).json({ message: "Input should be an array of job applications." });
//     }

//     const savedApplications = await JobApplication.insertMany(applications);
//     res.status(201).json(savedApplications);
//   } catch (error) {
//     console.error("Error creating job applications:", error);
//     res.status(500).json({ message: "Server error while saving job applications." });
//   }
// };


// Get all Job Applications
export const getAllJobApplications = async (req, res) => {
  try {
    const jobs = await JobApplication.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

// Delete a Job Application
export const deleteJobApplication = async (req, res) => {
  try {
    const { id } = req.params;
    await JobApplication.findByIdAndDelete(id);
    res.status(200).json({ message: "Job application deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job application" });
  }
};
