import { JobAnnouncement } from "../models/recruiterJAF.js";

export const createJobAnnouncement = async (req, res) => {
  try {
    const newJob = await JobAnnouncement.create(req.body);
    res.status(201).json({
      success: true,
      message: "Job announcement submitted successfully",
      data: newJob,
    });
  } catch (error) {
    console.error("Error creating job announcement:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create job announcement",
    });
  }
};
// create multiple data      bulk data set
// export const createJobAnnouncements = async (req, res) => {
//   try {
//     const jobData = req.body;

//     if (!Array.isArray(jobData) || jobData.length === 0) {
//       return res.status(400).json({ message: "Please send an array of job records." });
//     }

//     const savedJobs = await JobAnnouncement.insertMany(jobData);
//     res.status(201).json(savedJobs);
//   } catch (error) {
//     console.error("Error creating job announcements:", error);
//     res.status(500).json({ message: "Server Error", error });
//   }
// };


// GET /api/job-announcements
export  const getAllJobAnnouncements = async (req, res) => {
  try {
    const announcements = await JobAnnouncement.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({
      success: true,
      data: announcements,
    });
  } catch (error) {
    console.error("Error fetching job announcements:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve job announcements",
    });
  }
};

